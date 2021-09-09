// const Product = require('../../models/productModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');
const Cart = require('../../models/cartModel');
const Order = require('../../models/orderModel');

// we can also implement geolocation feature by storing lats and longitudes
// then delivery days can be calculated through that only location latlangs and centers distance

exports.getAllOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.find();

  if (!orders) {
    return next(new AppError('no orders found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: orders,
    },
  });
});

exports.newOrder = catchAsync(async (req, res, next) => {
  const cart = Cart.find();

  if (!cart) {
    return next(new AppError('cart is found empty', 404));
  }

  const order = await Order.create({
    dest: req.body.dest,
    user: req.user._id,
    total: cart[0].total,
    amnt: cart[0].amnt,
    deliver: req.body.deliver,
    payMode: req.body.payMode,
    prods: cart[0].prods,
  });

  res.status(200).json({
    status: 'success',
    data: {
      data: order,
    },
  });
});

exports.getMyOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.find({ user: req.user_id });

  if (!orders) {
    return next(new AppError('no orders found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: orders,
    },
  });
});

exports.cancelMyOrder = catchAsync(async (req, res, next) => {
  const order = await Order.find({ _id: req.params.id });

  if (!order) {
    return next(new AppError('no orders found', 404));
  }

  order.status = 'cancelled';

  await order.save({ validateBeforeSave: false });

  res.status(200).json({
    status: 'success',
    data: {
      data: null,
    },
  });
});

exports.getMyOrder = catchAsync(async (req, res, next) => {
  const order = await Order.find({ _id: req.params.id });

  if (!order) {
    return next(new AppError('no orders found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: order,
    },
  });
});
