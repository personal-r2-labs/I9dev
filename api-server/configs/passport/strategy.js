const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const Developer = require('../../models/user-model');
const Enterprising = require('../../models/ent-model');



passport.use(new LocalStrategy(
  function(email, password, done) {
    Developer.findOne({ email: email }, function (err, user) {
      if (err) { 
        return done(err); }
      if (!email) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!email.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, email);
    });
  }
));

module.exports = passport;