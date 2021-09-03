/* eslint-disable node/no-unsupported-features/es-syntax */
const AppError = require('../utils/appError');

// in case of invalid mongoId in accesed from params
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path} : ${err.value}`;
  //console.log(err.constructor.name); //this will give CastError
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  // object.keys(takes and object and returns an array of keys from key-value pair)
  const field = Object.keys(err.keyValue)[0];
  const value = err.keyValue[field];
  //console.log(value);
  const message = `Duplicate field value: ${value}. Please use another value`;
  return new AppError(message, 400);
};

// errors coming in validation of mongoose data like a string too short, or wrong format of data in req.body
const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join('. ')} `;
  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError('Ivalid token ,please login again', 401);

const handleTokenExpiredError = () =>
  new AppError(' you token is expired, login again', 401);

const sendErrorDev = (err, req, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, req, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    //log error
    console.error('Error !!', err);
    // send message
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong   ',
    });
  }
};

module.exports = (err, req, res, next) => {
  // this line checks if status code is defined
  // the status code will either be defined for the error or it will 500 that means internal server error
  err.statusCode = err.statusCode || 500;
  // this line checks if status is defined
  err.status = err.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    error.name = err.name;
    error.code = err.code;
    // console.log(error);  
    //error.message = err.message;
    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === 'ValidationError')
      error = handleValidationErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleTokenExpiredError();
    sendErrorProd(error, req, res);
  }
};
