const express = require('express');
const authController = require('../controllers/authController');
const orderController = require('../controllers/main/orderController');

const router = express.Router();

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    orderController.getAllOrders
  )
  .post(authController.protect, orderController.newOrder);

router
  .route('/getMyOrders')
  .get(authController.protect, orderController.getMyOrders);

router
  .route('/:id')
  .delete(authController.protect, orderController.cancelMyOrder)
  .get(authController.protect, orderController.getMyOrder);

module.exports = router;
