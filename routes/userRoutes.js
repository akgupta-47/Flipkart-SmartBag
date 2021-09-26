const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

// user lohin/signup routes
router.post('/signup', authController.signUp);
router.patch('/signup/:token', authController.confirmSignup);
router.post('/login', authController.login);
router.get('/logout', authController.protect, authController.logout);

// user password change routes
router.post('/forgot-password', authController.forgotPassword);
router.patch('/reset-password/:token', authController.resetPassword);
router.patch(
  '/update-my-password',
  authController.protect,
  authController.updatePassword
);

// user update routes
router.patch('/update-me', authController.protect, userController.updateMe);
router.delete('/delete-me', authController.protect, userController.deleteMe);

// display user routes
router
  .route('/get-database-users')
  .get(authController.protect, userController.getAllUsers);

router
  .route('/:id')
  .get(authController.protect, userController.getUser)
  .delete(authController.protect, userController.deleteUser);

module.exports = router;
