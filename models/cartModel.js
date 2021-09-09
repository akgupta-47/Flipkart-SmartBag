const mongoose = require('mongoose');

const cartSchema = mongoose.Schema(
  {
    total: {
      type: Number,
      required: true,
      default: 0,
    },
    amnt: {
      type: Number,
      required: true,
      default: 0,
    },
    prods: [
      {
        quant: Number,
        prod: {
          type: mongoose.Schema.ObjectId,
          ref: 'Product',
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
