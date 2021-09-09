const express = require('express');
// const authController = require('../controllers/authController');
const cartController = require('../controllers/main/cartController');

const router = express.Router();

router.route('/').get(cartController.viewCart);

router
  .route('/:id')
  .post(cartController.addToCart)
  .delete(cartController.removeFromCart);

module.exports = router;
