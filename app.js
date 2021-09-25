const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
// const hpp = require('hpp');

const userRouter = require('./routes/userRoutes');

const app = express();

// in cors always add the client url
app.use(cors({ origin: [`${process.env.CLIENT_URL}`], credentials: true }));

// eslint-disable-next-line import/newline-after-import
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

// setting secure http headers
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", 'http://127.0.0.1:5000/*'],
      baseUri: ["'self'"],
      fontSrc: ["'self'", 'https:', 'data:'],
      scriptSrc: ["'self'", 'https://cdnjs.cloudflare.com', 'unsafe-eval'],
      objectSrc: ["'none'"],
      styleSrc: ["'self'", 'https:', 'unsafe-inline'],
      upgradeInsecureRequests: [],
    },
  })
);

// limit requests from same ip
// send max limit according to your app
// 429 = status code ,too many requests
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Whoa!! too many requests, try again in 1 hour',
});
app.use('/appname', limiter);

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// mongo data sanitization to prevent querry injection
app.use(mongoSanitize());

// satitisation against xss (malicious html in querry string)
app.use(xss());

if (process.env.NODE_ENV === 'DEVELOPMENT') {
  app.use(morgan('dev'));
}

// app.use('/', basicRouter);
app.use('/api/users', userRouter);
app.use('/api/product', require('./routes/productRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));
app.use('/api/order', require('./routes/orderRoutes'));

// this will run after all the routes defined by us for this applications are checked and none is matched
// therefore it is placed at end of app.js
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on server`, 404));
});

// error handling express callback functions always take error/err as its first argument
app.use(globalErrorHandler);

module.exports = app;
