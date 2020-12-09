const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage =  cloudinaryStorage({
  cloudinary,
  folder: "oh-review", // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png', 'jpeg', 'gif'],
  transformation: [{ width: 150, height: "auto", crop: 'limit' }],
   
});

const parser = multer({ storage });
module.exports = parser;