// const Product = require('../../models/productModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');
const Cart = require('../../models/cartModel');

exports.viewCart = catchAsync(async (req, res, next) => {
  const cart = await Cart.find({ user: req.user._id });

  if (!cart) {
    return next(new AppError('No items in cart', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: cart,
    },
  });
});

exports.addToCart = catchAsync(async (req, res, next) => {
  let cart = await Cart.find({ user: req.user._id });

  if (cart.length === 0) {
    // if no product in the cart then create new cart
    cart = await Cart.create({
      total: 1,
      amnt: req.body.amount,
      prods: [
        {
          quant: 1,
          prod: req.params.id,
        },
      ],
    });
  } else {
    // increment the total products
    cart[0].total += 1;
    // increment the checout amount
    cart[0].amnt += +req.body.amount;
    let ind = -1;

    // find if product is already in cart or not
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < cart[0].prods.length; i++) {
      if (cart[0].prods[i].prod.toString() === req.params.id) {
        ind = i;
        break;
      }
    }

    // if the object is already in cart increment its count
    if (ind !== -1) {
      cart[0].prods[ind].quant += 1;
    } else {
      // if product is not in cart, push it in array
      cart[0].prods.push({
        quant: 1,
        prod: req.params.id,
      });
    }
    await cart[0].save({ validateBeforeSave: false });
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: cart,
    },
  });
});

exports.removeFromCart = catchAsync(async (req, res, next) => {
  // populate based prod in prods arrays abject
  // eslint-disable-next-line prefer-const
  let cart = await Cart.find({ user: req.user._id }).populate({
    path: 'prods',
    populate: { path: 'prod' },
  });

  if (!cart) {
    return next(new AppError('No items in cart', 404));
  }

  let ind;
  // find index of product in prods array
  for (let i = 0; i < cart[0].prods.length; i += 1) {
    if (cart[0].prods[i].prod.toJSON()._id.toString() === req.params.id) {
      ind = i;
      break;
    }
  }

  // decerement the amount and the total
  cart[0].total -= 1;
  cart[0].amnt -= cart[0].prods[ind].prod.toJSON().price;

  // decerement count or remove object from array
  const pet = cart[0].prods[ind].quant;
  if (pet > 1) {
    cart[0].prods[ind].quant -= 1;
  } else {
    cart[0].prods.splice(ind, 1);
  }

  // save the document
  await cart[0].save({ validateBeforeSave: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.emptyCart = catchAsync(async (req, res, next) => {
  await Cart.deleteOne({ user: req.user._id });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
