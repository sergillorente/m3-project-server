const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const { isLoggedIn, isNotLoggedIn, validationLogin } = require("../helpers/middlewares");

const Hotel = require('../models/hotel.model');



// Route to GET all hotels (when logged in)

router.get('/hotels', isLoggedIn, (req, res, next) => {
    
    Hotel.find()
        .then( ( response ) => {
                res
                    .status(200) // hotels shown
                    .json(response);
        })
        .catch( (error) => {
            next( createError(error) ); //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
        })
})

// GET hotels by its ID from DB

router.get('/hotels/:id', isLoggedIn, (req, res, next) => {
    const { id } = req.params

    Hotel.findById(id)
        .then( (response) => {
            
            res
                .status(200)
                .json(response)
        })
        .catch( (error) =>{
            next( createError(error) );  //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
        })
})



module.exports = router;