const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'owner'),
    (req, res) => {
      res.status(200).json({
        message: 'holaaa from the server side!!',
        app: 'test-login',
      });
    }
  );

module.exports = router;
