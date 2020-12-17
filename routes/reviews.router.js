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
    const { hotelId } = req.params

    Review.find({ hotelId }).populate('userId', 'username picture')
        .then((reviewsOfHotel) => {
            res
                .status(200)
                .json(reviewsOfHotel) 
        })
        .catch( (error) => {
            next( createError(error, `The reviews of this specific hotel cannot be shown`) ); 
        })
})

// POST // Display the option to create a new review

router.post('/reviews/:hotelId', isLoggedIn, (req, res, next) => {
    const { hotelId } = req.params
    const { text, rating } = req.body

    if (!text || !rating)
        return next(createError(400, "Please fill all required fields")); 

    const userId = req.session.currentUser._id 

    Review.create({ text, rating, hotelId, userId }) 
        .then( (specificReview) => {
            res
                .status(200)
                .json(specificReview) 
        })
        .catch( (error) => {
            ext( createError(error, `The creation request of this review couldn't be made`) ); 
        })

})


// DELETE // You can delete a review that an specific user has created before

router.delete('/reviews/:reviewId', isLoggedIn, (req, res, next) => {
    const { reviewId } = req.params;

    Review.findByIdAndRemove(reviewId)
        .then( (reviewDeleted) =>{
            res
            .status(200)
            .json(reviewDeleted) 
        })
        .catch( (error) => {
            ext( createError(error, `The review has not been deleted`) );
        })
})


module.exports = router;