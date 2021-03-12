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
  validationSignup,
  validationSignupEmail,
  validationSignupPassword
} = require("../helpers/middlewares");

// POST '/auth/signup'
router.post('/signup', isNotLoggedIn, validationSignup, validationSignupEmail, validationSignupPassword, (req, res, next) => {
  const { username, email, password } = req.body;

  User.findOne({ email })
    .then( (foundUser) => {

      if (foundUser) {
        return next( createError(400, 'User already exists') ); 
      }
      else {
        const salt = bcrypt.genSaltSync(saltRounds);
        const encryptedPassword = bcrypt.hashSync(password, salt);

        User.create( { username, email, password: encryptedPassword })
          .then( (createdUser) => {
            createdUser.password = "*";
            req.session.currentUser = createdUser; 

            res
              .status(201) 
              .json(createdUser); 

          })
          .catch( (err) => {
            next( createError(err, 'There was an error during the signup') );  
          });
      }
    })
    .catch( (err) => {
      next( createError(err, 'There was an error during the signup') );  
    });


})




// POST '/auth/login'
router.post('/login', isNotLoggedIn, validationLogin, (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then( (user) => {
      if (! user) {
        return next( createError(404, `The user doesn't exist`)  );  
      }

      const passwordIsValid = bcrypt.compareSync(password, user.password); 

      if (passwordIsValid) {
        user.password = "*";
        req.session.currentUser = user;

        res
          .status(200)
          .json(user);

      }
      else {
        next( createError(401, `Password and email are not correct`) ); 
      }

    })
    .catch( (err) => {
      next( createError(err, `There is some error during the login`)  ); 
    });
})


// GET '/auth/logout'
router.get('/logout',  isLoggedIn, (req, res, next) => {
  req.session.destroy( function(err){
    if (err) {
      return next(err, `The user couldn't logout`); 
    }

    res
      .status(204)  
      .send(); 
  } )
})



// GET '/auth/me'
router.get('/me', isLoggedIn, (req, res, next) => {
  const currentUserSessionData = req.session.currentUser;

  res
    .status(200)
    .json(currentUserSessionData); 

})


module.exports = router;
