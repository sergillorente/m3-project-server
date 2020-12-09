const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const { isLoggedIn } = require("../helpers/middlewares");

const Review = require('../models/review.model');
const User = require('../models/user.model');
const Hotel = require('../models/hotel.model');
const { json } = require("body-parser");

// GET // Show the current reviews than an specific hotel has

router.get('/reviews/:hotelId', isLoggedIn, (req, res, next) => {
    const { hotelId } = req.match.params

    const hotelReviews = Review.find({ hotelId })
        .then((reviewsOfHotel) => {
            res
                .status(200)
                .json(reviewsOfHotel)
        })
        .catch( (error) => {
            next( createError(error) ); //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
        })
    
})


// GET // Show the current reviews that an specific hotel has from an specific user

router.get('/reviews/:hotelId/:userId', isLoggedIn, (req, res, next) => {
    const { hotelId, userId } = req.match.params
    
    const hotelReviewsByUser = Review.find( { hotelId } )
        .then( (reviewsByHotel) => {
            res
                .status(200)
                .json(reviewsByHotel)

            Review.findById( {userId} )
                .then( (reviewsByUser) => {

                    res
                        .status(200)
                        .json(reviewsByUser)
                })
                .catch( (error) => {
                    ext( createError(error) );
                })
        })
        .catch( (error) => {
            ext( createError(error) ); //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
        })
})


// POST // Display the option to create a new review

router.post('/reviews/:id', isLoggedIn, (req, res, next) => {

})


// DELETE // You can delete a review that an specific user has created before

router.delete('/reviews', isLoggedIn, (req, res, next) => {

})


module.exports = router;