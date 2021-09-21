// const Product = require('../../models/productModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');
const Cart = require('../../models/cartModel');
const Order = require('../../models/orderModel');
const convertToCsv = require('../../utils/objectToCsv');

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
  const cart = await Cart.find({ user: req.user._id });

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
  const orders = await Order.find({ user: req.user._id });

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

  order[0].status = 'cancelled';

  await order[0].save({ validateBeforeSave: false });

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

exports.getMyOrdersCsv = catchAsync(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  // eslint-disable-next-line one-var
  let i, j;
  const jsonOrders = [];
  for (i = 0; i < orders.length; i += 1) {
    for (j = 0; j < orders[i].prods.length; j += 1) {
      const mukesh = {
        user: req.user._id,
        odtime: orders[i].odtime,
        product: orders[i].prods[j].prod,
        quantity: orders[i].prods[j].quant,
      };
      jsonOrders.push(mukesh);
    }
  }

  const csv = await convertToCsv(jsonOrders);
  console.log(csv);

  res.status(200).json({
    status: 'success',
    data: {
      jsonOrders,
    },
  });
});
