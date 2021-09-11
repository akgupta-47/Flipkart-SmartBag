const express = require('express');
const authController = require('../controllers/authController');
const cartController = require('../controllers/main/cartController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, cartController.viewCart)
  .delete(authController.protect, cartController.emptyCart);

router
  .route('/:id')
  .post(authController.protect, cartController.addToCart)
  .delete(authController.protect, cartController.removeFromCart);

module.exports = router;
