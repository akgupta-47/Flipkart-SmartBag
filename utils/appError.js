class AppError extends Error {
  constructor(message, statusCode) {
    // super takes only message property as Error class only takes one property that is message
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    // flag errors created in the application as operational
    this.isOperational = true;

    // err.stack is the line where problem occured in code
    // when new opbject is formed and constructor is called, we don't want that call to appear in stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
