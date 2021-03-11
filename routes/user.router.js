const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const { isLoggedIn } = require("../helpers/middlewares");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = require('../models/user.model')

// GET // Show the user profile page with its form
router.get('/profile/:id', isLoggedIn, (req, res, next) => {
    const { id } = req.params

    User.findById(id)
        .then((response) => {
            res
                .status(200)
                .json(response)
        })
        .catch((error) => {
            next(createError(error, `The profile for this specific user can't be shown`));
        })
})

// PUT // Modify the inputs values inside if the profile form

router.put('/profile', isLoggedIn, (req, res, next) => {
    const userId = req.session.currentUser._id
    const { username, password } = req.body;

    if (!username) {
        return next(createError(400, "Please fill all required fields"));
    }

    const updates = { username }

    if (password) {
        const salt = bcrypt.genSaltSync(saltRounds);
        const encryptedPassword = bcrypt.hashSync(password, salt);
        updates.password = encryptedPassword
    }

    User.findByIdAndUpdate(userId, updates, { new: true })
        .then((user) => {
            user.password = "*";
            req.session.currentUser = user;

            res
                .status(200)
                .json(user)
        })
        .catch((error) => {
            next(createError(error, `The updates made in the profile couldn't be processed`));
        })
})

router.delete('/delete/:id', (req, res, next) => {
    const { id } = req.params;

    User.findByIdAndRemove(id)
        .then((response) => {
            res
                .status(200)
                .json(response)
        })
        .catch((error) => {
            next(createError(error, `Error deleting user`));
        })
})

module.exports = router;