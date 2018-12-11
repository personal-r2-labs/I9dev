const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const Developer = require('../../models/user-model');
const Enterprising = require('../../models/ent-model');

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: email }, function (err, username) {
      if (err) { 
        return done(err); }
      if (!username) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!username.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, email);
    });
  }
));

module.exports = passport;