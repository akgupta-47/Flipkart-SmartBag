const mongoose = require('mongoose');
// const validator = require('validator');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
  },
  categ: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  quant: {
    type: String,
    required: true,
    default: 0,
  },
  brand: {
    type: String,
  },
  contType: {
    type: String,
  },
  exp: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
