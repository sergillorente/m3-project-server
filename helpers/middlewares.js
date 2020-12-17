const createError = require("http-errors");

exports.isLoggedIn = (req, res, next) => {
  if (req.session.currentUser) next();
  else next(createError(401, `The user has not any cookie or session already opened`));
};

exports.isNotLoggedIn = (req, res, next) => {
  if ( !req.session.currentUser ) next();
  else next( createError(403, `The user either has a cookie or is logged in`) );   
};

exports.validationLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password){
    next(createError(400, 'Please fill all required fields in the login'));
  } 
  else next();
};

exports.validationSignup = (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    next(createError(400, 'Please fill all required fields in the signup'))
  }
  else next();
};

