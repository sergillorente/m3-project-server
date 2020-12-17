const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = require("../models/user.model");


// HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLogin,
  validationSignup
} = require("../helpers/middlewares");

// POST '/auth/signup'
router.post('/signup', isNotLoggedIn, validationSignup, (req, res, next) => {
  const { username, email, password } = req.body;

  User.findOne({ email })
    .then( (foundUser) => {

      if (foundUser) {
        // If username is already taken, then return error response
        return next( createError(400, 'User already exists') ); // Bad Request
      }
      else {
        // If username is available, go and create a new user
        const salt = bcrypt.genSaltSync(saltRounds);
        const encryptedPassword = bcrypt.hashSync(password, salt);
        console.log(salt);

        User.create( { username, email, password: encryptedPassword })
          .then( (createdUser) => {
            // set the `req.session.currentUser` using newly created user object, to trigger creation of the session and cookie
            createdUser.password = "*";
            req.session.currentUser = createdUser; // automatically logs in the user by setting the session/cookie

            res
              .status(201) // Created
              .json(createdUser); // res.send()

          })
          .catch( (err) => {
            next( createError(err, 'There was an error during the signup') );  //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
          });
      }
    })
    .catch( (err) => {
      next( createError(err, 'There was an error during the signup') );  //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
    });


})




// POST '/auth/login'
router.post('/login', isNotLoggedIn, validationLogin, (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then( (user) => {
      if (! user) {
        // If user with that username can't be found, respond with an error
        return next( createError(404, `The user doesn't exist`)  );  // Not Found
      }

      const passwordIsValid = bcrypt.compareSync(password, user.password); //  true/false

      if (passwordIsValid) {
        // set the `req.session.currentUser`, to trigger creation of the session
        user.password = "*";
        req.session.currentUser = user;

        res
          .status(200)
          .json(user);

      }
      else {
        next( createError(401, `Password and email are not correct`) ); // Unathorized
      }

    })
    .catch( (err) => {
      next( createError(err, `There is some error during the login`)  ); // Internal error 500
    });
})


// GET '/auth/logout'
router.get('/logout',  isLoggedIn, (req, res, next) => {
  // destroy the session to log out
  req.session.destroy( function(err){
    if (err) {
      return next(err, `The user couldn't logout`); // there has been a problem with the destroyment process
    }

    res
      .status(204)  //  No Content
      .send(); // Successfully done
  } )
})



// GET '/auth/me'
router.get('/me', isLoggedIn, (req, res, next) => {
  // creation of the current session for the user with a cookie
  const currentUserSessionData = req.session.currentUser;

  res
    .status(200)
    .json(currentUserSessionData); // succesfully done

})


module.exports = router;
