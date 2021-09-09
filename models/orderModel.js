const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  dest: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
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
  odtime: {
    type: Date,
    default: Date.now(),
  },
  deliver: {
    type: Number,
    required: true,
    default: 3,
  },
  payMode: {
    type: String,
    required: true,
    default: 'cod',
  },
  status: {
    type: String,
    emun: ['pending', 'delivered', 'cancelled'],
    default: 'pending',
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
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
