const express = require('express');
const authController = require('../controllers/authController');
const orderController = require('../controllers/main/orderController');

const router = express.router();

router
  .route(
    '/',
    authController.protect,
    authController.restrictTo('admin'),
    orderController.getAllOrders
  )
  .post(authController.protect, orderController.newOrder);

router.route(
  'getMyOrders',
  authController.protect,
  orderController.getMyOrders
);
