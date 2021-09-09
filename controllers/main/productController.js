const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const Product = require('../../models/productModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');
const factory = require('../handlerFactory');

const {
  cloudinary,
  deleteProductImage,
} = require('../../utils/cloudinaryUpload');

const multerFilter = (req, file, callback) => {
  if (file.mimetype.startsWith('image')) {
    callback(null, true);
  } else {
    callback(
      new AppError('Not an image! Please upload only images.', 400),
      false
    );
  }
};

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    public_id: (req, file) =>
      `${file.originalname.split('.')[0]}-${Date.now()}`,
    folder: 'products',
  },
});

exports.uploadProd = multer({
  storage,
  limits: { fileSize: 1000000 },
  fileFilter: multerFilter,
}).single('product');

exports.getAllProdsList = catchAsync(async (req, res, next) => {
  const searchString = new RegExp(req.body.search.trim());
  const products = await Product.find({ name: searchString });

  if (!products) {
    return next(new AppError('No such products', 404));
  }

  // eslint-disable-next-line array-callback-return
  const prods = products.map((el) => {
    const obj = {
      name: el.name,
      img: el.img,
      price: el.price,
      rating: el.rating,
      quant: el.quant,
      _id: el._id,
    };
    return obj;
  });

  res.status(200).json({
    status: 'success',
    data: {
      data: prods,
    },
  });
});

exports.getProduct = factory.getOne(Product);

exports.newProduct = catchAsync(async (req, res, next) => {
  // console.log(req.body);
  const product = await Product.create({
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    ...req.body,
    img: req.file.path,
  });

  res.status(200).json({
    status: 'success',
    data: {
      data: product,
    },
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (req.file) {
    deleteProductImage(product.img, next);

    product.img = req.file.path;
    await product.save({ validateBeforeSave: false });
  }

  if (!product) {
    return next(new AppError('No document with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: product,
    },
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return next(new AppError('No product found with that id to delete', 404));
  }

  deleteProductImage(product.img, next);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
