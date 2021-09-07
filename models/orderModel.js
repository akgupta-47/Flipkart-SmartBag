const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  dest: {
    type: String,
    required: true,
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
  },
  prods: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
    },
  ],
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
