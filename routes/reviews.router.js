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
    // receive the review ids through params
    const { hotelId } = req.params
    // Find the review id and then populate it to obtain the username and the picture corresponding to that id
    Review.find({ hotelId }).populate('userId', 'username picture')
        .then((reviewsOfHotel) => {
            res
                .status(200)
                .json(reviewsOfHotel) // succesfully done
        })
        .catch( (error) => {
            next( createError(error, `The reviews of this specific hotel cannot be shown`) ); // Internal Server Error
        })
})

// POST // Display the option to create a new review

router.post('/reviews/:hotelId', isLoggedIn, (req, res, next) => {
    // through req.params we'll get the hotel id, and once we get, through req.body we
    const { hotelId } = req.params
    const { text, rating } = req.body

    if (!text || !rating)
        return next(createError(400, "Please fill all required fields")); // if some field is missing

    const userId = req.session.currentUser._id // otherwise create a new session refering to the user's id

    Review.create({ text, rating, hotelId, userId }) // now, let's create a review following the review model
        .then( (specificReview) => {
            res
                .status(200)
                .json(specificReview) // succesfully done
        })
        .catch( (error) => {
            ext( createError(error, `The creation request of this review couldn't be made`) ); // Internal Server Error
        })

})


// DELETE // You can delete a review that an specific user has created before

router.delete('/reviews/:reviewId', isLoggedIn, (req, res, next) => {
    // we delete it by taking the id coming from params
    const { reviewId } = req.params;

    Review.findByIdAndRemove(reviewId)
        .then( (reviewDeleted) =>{
            res
            .status(200)
            .json(reviewDeleted) // succesfully done
        })
        .catch( (error) => {
            ext( createError(error, `The review has not been deleted`) ); // Internal Server Error
        })
})


module.exports = router;