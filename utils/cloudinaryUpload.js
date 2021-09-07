const cloudinary = require('cloudinary').v2;
const AppError = require('./appError');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const deleteProductImage = (image, next) => {
  const truncateBefore = function (str, pattern) {
    return str.slice(str.indexOf(pattern) + pattern.length);
  };

  // public id is name of the image
  const publicId = truncateBefore(image, 'products/').split('.')[0];
  // console.log(publicId);

  cloudinary.uploader.destroy(`products/${publicId}`, function (error, result) {
    if (error) {
      return next(
        new AppError(`Error during cloudinary Destroy: ${error.message}`, 401)
      );
    }
    // console.log(result);
  });
};

module.exports = {
  cloudinary,
  deleteProductImage,
};
