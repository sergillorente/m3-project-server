const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const { isLoggedIn } = require("../helpers/middlewares");
const { create } = require("../models/user.model");
const parser = require('./../config/cloudinary');

const User = require('../models/user.model')

// GET // Show the user profile page with its form

router.get('/profile', isLoggedIn, (req, res, next) => {

    User.find()
        .then( (response) => {

            if(!response) {
                return next(createError(404)) 
            }
            res
                .status(200)
                .json(response)
        })
        .catch( (error) => {
            next( createError(error) );  //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
        })
})

// PUT // Modify the inputs values inside if the profile form

router.put('/profile/:profileid', isLoggedIn, parser.single('profilepic'), (req, res, next) => {
    // I am requesting the values from the form that I want to update
    const { username, picture} = req.body;

    let imageUrl;
    if (req.file) {
        imageUrl = req.file.secure_url;
    }

    const profileId = req.params.profileid;

    let update = {  username, picture}
    if (imageUrl) {
        update.picture = imageUrl
    }

    User.findByIdAndUpdate({ profileId, update })
        .then( (response ) => {

            if (!response) {
                return next(createError(404))
            }

            res
                .status(200)
                .json(response)
        })
        .catch( (error) =>{
            next( createError(error) );  //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
        })
})

module.exports = router;