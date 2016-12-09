var passport = require("passport");



// GET /signup
function getSignup(request, response) {
	response.render('signup.ejs',{message: request.flash('signupMessage')});
}

// POST /signup
function postSignup(request, response) {
var signupStrategy = passport.authenticate('local-signup',{
	successRedirect: '/',
	failureRedirect: '/signup',
	falureFlash: true
});
return signupStrategy(request,response);
}


// GET /login
function getLogin(request, response) { 
	response.render('login.ejs',{message: request.flash('loginMessage')});
}

// POST /login 
function postLogin(request, response) {
var loginStrategy = passport.authenticate('local-login',{
	successRedirect: '/',
	failureRedirect: '/login',
	falureFlash: true
});
return loginStrategy(request,response);
}

// GET /logout
function getLogout(request, response) {
	request.logout();
	response.redirect('/');
}

// Restricted page
function secret(request, response){
	if(authenticatedUser){
res.render('seret.ejs',{message: request.flash('secretMessage')});
}else response.redirect('/');

}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  secret: secret
};