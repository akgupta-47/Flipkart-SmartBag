const express = require('express');
// const authController = require('../controllers/authController');
const prodController = require('../controllers/main/productController');

const router = express.Router();

router.route('/').post(prodController.uploadProd, prodController.newProduct);
router
  .route('/:id')
  .patch(prodController.uploadProd, prodController.updateProduct)
  .delete(prodController.deleteProduct)
  .get(prodController.getProduct);

router.route('/search').post(prodController.getAllProdsList);

module.exports = router;
