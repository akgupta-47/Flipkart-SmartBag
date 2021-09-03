const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Every USer must have a name'],
    validate: [
      validator.isAlpha,
      'name should only have characters not numbers or symbols',
    ],
  },
  email: {
    type: String,
    required: [true, 'every user must have an email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please enter a valid email!!'],
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: 8,
    // adding select: false will not show password property anytime a document is requested, until specified in the code to select the password
    select: false,
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin', 'owner'],
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your a password'],
    validate: {
      // This only works on SAVE
      // this is because the this keyword only points to the newley created documents
      validator: function (el) {
        return el === this.password;
      },
      message: 'password must be same',
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  validated: {
    type: Boolean,
    default: false,
    select: false,
  },
});

userSchema.pre('save', async function (next) {
  // only run this fun if password was modified
  if (!this.isModified('password')) return next();
  // Hash the password at cost of 12
  // bcrypt functions are usually async so use await
  this.password = await bcrypt.hash(this.password, 12);
  // DELETE it before getting it in databse coz we only need it for validation
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  // sometimes saving to database is slower than issuing the token, making the changePasword timestamp a bit after the token is issued
  // this creates problems for users
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function (next) {
  //this point to current querry
  this.find({ active: { $ne: false } });
  next();
});

// here we cannot use this.password as ,the select property is not alowed on current document for password
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    //console.log(changedTimestamp, JWTTimestamp);
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  // create password reset token
  const resetToken = crypto.randomBytes(32).toString('hex');

  // encrypt the password reset token before saving to database
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // set token expiration time
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  // send the token to function to compare
  return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
