// a function is sent as argument in catchAsync
module.exports = (fn) => {
  // instead of just calling fn we are returning a funtion
  // because when we wrap a function with catchAsync ,we were expecting to run the main function of route call
  // mind it in body of controller function add req, res, next
  return (req, res, next) => {
    // in catch the next code is actually err => next(err)
    // next is forwarding the error to our global error handling middleware
    fn(req, res, next).catch(next);
  };
};
