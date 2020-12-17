const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const { isLoggedIn, isNotLoggedIn, validationLogin } = require("../helpers/middlewares");

const Hotel = require('../models/hotel.model');



// Route to GET all hotels (when logged in)

router.get('/hotels', (req, res, next) => {
    Hotel.find()
        .then( ( response ) => {
            res
                    .status(200) 
                    .json(response); 
        })
        .catch( (error) => {
            next( createError(error, `The hotels haven't been able to show`) ); 
        })
})

// route to GET hotels by its ID from DB

router.get('/hotels/:id', isLoggedIn, (req, res, next) => {
    const { id } = req.params
    
    Hotel.findById(id)
        .then( (response) => {
            
            res
                .status(200)
                .json(response) 
        })
        .catch( (error) =>{
            next( createError(error, 'The requested hotel cannot be displayed') );  
        })
})



module.exports = router;