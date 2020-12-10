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

    Review.find({ hotelId })
        .then((reviewsOfHotel) => {
            res
                .status(200)
                .json(reviewsOfHotel)
        })
        .catch( (error) => {
            next( createError(error) ); //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
        })
})

// POST // Display the option to create a new review

router.post('/reviews/:id', isLoggedIn, (req, res, next) => {
    const { reviewId } = req.match.params
    const { text, rating } = req.body

    Review.findById( reviewId, { text, rating} )
        .then( (specificReview) => {
            res
                .status(200)
                .json(specificReview)
        })
        .catch( (error) => {
            ext( createError(error) ); //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
        })

})


// DELETE // You can delete a review that an specific user has created before

router.delete('/reviews/:id', isLoggedIn, (req, res, next) => {
    const { reviewId } = req.match.params;

    Review.findByIdAndRemove(reviewId)
        .then( (reviewDeleted) =>{
            res
                .status()
                .send(reviewDeleted)
        })
        .catch( (error) => {
            ext( createError(error) ); //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
        })
})


module.exports = router;