const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const { isLoggedIn, isNotLoggedIn, validationLogin } = require("../helpers/middlewares");

const Hotel = require('../models/hotel.model');



// Route to GET all hotels (when logged in)

router.get('/hotels', (req, res, next) => {
    // we call all the hotels from the DB
    Hotel.find()
        .then( ( response ) => {
            res
                    .status(200) 
                    .json(response); // hotels shown
        })
        .catch( (error) => {
            next( createError(error, `The hotels haven't been able to show`) ); // Internal Server Error
        })
})

// route to GET hotels by its ID from DB

router.get('/hotels/:id', isLoggedIn, (req, res, next) => {
    // we request an specific hotel. In order to do that we call this hotel by params and adding the id of it 
    const { id } = req.params
    
    Hotel.findById(id)
        .then( (response) => {
            
            res
                .status(200)
                .json(response) // succesfully done
        })
        .catch( (error) =>{
            next( createError(error, 'The requested hotel cannot be displayed') );  // Internal Server Error
        })
})



module.exports = router;