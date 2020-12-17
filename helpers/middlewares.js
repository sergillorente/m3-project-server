const createError = require("http-errors");

exports.isLoggedIn = (req, res, next) => {
  // Check if user request has a cookie/session.
  if (req.session.currentUser) next();
  else next(createError(401, `The user has not any cookie or session already opened`));
};

exports.isNotLoggedIn = (req, res, next) => {
  // Check if the user request came without a cookie and isn't logged in
  if ( !req.session.currentUser ) next();
  else next( createError(403, `The user either has a cookie or is logged in`) );   
};

exports.validationLogin = (req, res, next) => {
  // Check if either both inputs match or do not match match for the login process
  const { email, password } = req.body;

  if (!email || !password){
    next(createError(400, 'Please fill all required fields in the login'));
  } 
  else next();
};

exports.validationSignup = (req, res, next) => {
  // Check if either one of the three inputs match or do not match match for the signup process
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    next(createError(400, 'Please fill all required fields in the signup'))
  }
  else next();
};

