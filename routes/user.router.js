const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const { isLoggedIn } = require("../helpers/middlewares");
const parser = require('./../config/cloudinary');

const User = require('../models/user.model')


// include CLOUDINARY:
//upload a single image per once.
// ADD an horitzontal middleware
router.post("/upload", parser.single("picture"), (req, res, next) => {
  console.log("file is: ", req.file);

  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  // get secure_url from the file object and save it in the
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
  res.json({ secure_url: req.file.secure_url });
});


// GET // Show the user profile page with its form

router.get('/profile/:id', isLoggedIn, (req, res, next) => {
    const {id} = req.params
    //const userId = req.session.currentUser._id

    User.findById( id )
        .then( (response) => {
            res
                .status(200)
                .json(response)
        })
        .catch( (error) => {
            next( createError(error, `The profile for this specific user can't be shown`) );  //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
        })
})

// PUT // Modify the inputs values inside if the profile form

router.put('/profile', isLoggedIn, (req, res, next) => {
    const userId = req.session.currentUser._id
    // I am requesting the values from the form that I want to update
    const { username, picture } = req.body;

    User.findByIdAndUpdate( userId, { username, picture }, {new: true})
        .then( (response ) => {

            res
                .status(200)
                .json(response)
        })
        .catch( (error) =>{
            next( createError(error, `The updates made in the profile couldn't be processed`) );  //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
        })
})

module.exports = router;