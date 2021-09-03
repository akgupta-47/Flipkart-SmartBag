const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSignToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  // Cookie implementaion (cookies are data that are sent by browser with every request)
  // as we can see we used a httpOnly way of storing key
  // we cannot manipulate it from our side for logging out like deleting it
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
  res.cookie('jwt', token, cookieOptions);

  // as the cookie is in the browser stored
  // we no longer need to show the password when new doc is created
  user.password = undefined;

  //send the token
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

exports.confirmSignup = catchAsync(async (req, res, next) => {
  const { token } = req.params;

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //3.  Check if user still exists. Si no hay un id del usuario... falso
  const user = await User.findById(decoded.id).select('+validated');
  if (!user) {
    return next(
      new AppError('The user belonging to this token does not exist.', 401)
    );
  }
  if (user.validated) {
    return next(new AppError('This account has already been validated', 400));
  }
  user.validated = true;
  await user.save({ validateBeforeSave: false });
  createSignToken(user, 200, res);
});

exports.signUp = catchAsync(async (req, res, next) => {
  // if (req.body.role !== 'user') {
  //   return next(
  //     new AppError('You can only be a user, so stay in your limits', 401)
  //   );
  // }

  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = signToken(newUser._id);
  // console.log(token);

  //Send email to client
  const URL = `${req.protocol}://${req.get(
    'host'
  )}/appname/users/signup/${token}`;

  const message = `You must complete the registration process by following the link below: \n ${URL}.`;

  try {
    sendEmail({
      email: newUser.email,
      subject: 'Follow the instructions to activate your account.',
      message,
    });

    res.status(200).json({
      status: 'success',
      message: 'Token sent by email',
    });
  } catch (err) {
    // console.log(err);
    return next(
      new AppError(
        'There was an error sending an email, try sending later',
        500
      )
    );
  }

  //jwt.sign(payload, secretOrPrivateKey, [options, callback])
  // const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
  //   expiresIn: process.env.JWT_EXPIRES_IN,
  // });

  //createSignToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  // check if user has entered a password and email
  if (!email || !password) {
    return next(new AppError('Please enter your email and password', 400));
  }
  // check if what they entered actually exists
  const user = await User.findOne({ email }).select('+password');
  // we do not put the call the correct password statement from separate variable, as if user doesn't exist then user.password doesnot exist that causes error
  // const correct = await user.correctPassword(password, user.password;

  // check if user exists and the password is correct
  // correctPaasword(password enters(unhashed), password in database(hashed))
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('invalid email or password', 401)); // 401 is authorisation erroe
  }

  // if everything is ok send token to the client
  createSignToken(user, 200, res);
});

// Since the httpOnly secure way of sending cookies the deletion is not possible
// a clever way to overWrite the cookie with some dummy text so
// it does not know which user to log in
exports.logout = (req, res) => {
  res.cookie('jwt', 'GuessWhatYouJustGotLoggedOut', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: 'success' });
};

// protect routes
exports.protect = catchAsync(async (req, res, next) => {
  // getting token and check if it is theres
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
    //console.log(token);
  }
  if (!token) {
    return next(
      new AppError('You are not logged in, log in to get access!!', 401)
    );
  }
  // Token verification and if no one changed the token
  // jwt.verify is a sync function without callback, so we need make it async
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // check if user still exists
  // here as payload contains the id, so decoded.id will give us the id of document
  // check if user has not been deleted for the userfor whome the token was issued
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError('the token belonging to the user does not exist', 401)
    );
  }

  // check if user changed password after token was issued
  // check if password changed after is greater than token issued at time
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('Use the recently changed password and login again', 401)
    );
  }

  // Grant access to protected route
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

exports.restrictTo = (...roles) => {
  // wrapper function return the middleware
  return (req, res, next) => {
    // roles array has ['admin','owner']
    // as the prtect middleware runs before this middleware, it already has the req.user propery on it
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(
          'You dont have permissions to access to use this route',
          403
        )
      ); //403 is forbidden error)
    }
    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on posted email address
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError('There is no user with that email address', 404));
  }

  // 2) Generate random user tokens
  const resetToken = user.createPasswordResetToken();
  // as we updated the document by adding the encrypted token, we need tot save the modified document
  // but we also need to turnOff the validators on password, email and required fields
  await user.save({ validateBeforeSave: false });

  // send email to user
  try {
    const resetURL = `${req.protocol}://${req.get(
      'host'
    )}/appname/users/reset-password/${resetToken}`;

    const message = `Forgot your password, Don't worry make a request on ${resetURL} to reset your password`;
    await sendEmail({
      email: user.email,
      subject: 'Your password reset token(expiring in 10 mins)',
      message,
    });

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email!',
    });
  } catch (err) {
    // console.log(err);
    user.createPasswordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      new AppError(
        'There was an error sending the email. Try again later!',
        500
      )
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // Get user based on token from
  const hashToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');
  const user = await User.findOne({
    passwordResetToken: hashToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // check if the token is not expired and that there is a user and set new password
  if (!user) {
    return next(new AppError('Invalid token or has expired', 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  // the above statements only update but dont save so we have to do it manually
  await user.save();

  // log the user in and send jwt token
  createSignToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get user from collection
  const user = await User.findById(req.user.id).select('+password');

  // 2) Check if POSTed current password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError('Your current password is wrong.', 401));
  }

  // 3) If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  //User.findByIdAndUpdate() will not word as the validators will not work as mongoose doesnt keep current object in memory and pre-save middleware will not work as

  // 4) Log user in, send JWT
  createSignToken(user, 200, res);
});
