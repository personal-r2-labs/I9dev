/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/user-model');

passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession, (err, userDocument) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, userDocument);
  });
});

passport.use(new LocalStrategy((username, password, next) => {
  User.findOne({
    username
  }, (err, foundUser) => {
    if (err) {
      next(err);
      return;
    }

    if (!foundUser) {
      next(null, false, {
        message: 'Incorrect username.'
      });
      return;
    }

    if (!bcrypt.compareSync(password, foundUser.password)) {
      next(null, false, {
        message: 'Incorrect password.'
      });
      return;
    }

    next(null, foundUser);
  });
}));

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOKID,
  clientSecret: process.env.FACEBOOKSECRET,
  callbackURL: "localhost:3000/auth/facebook/callback",
  passReqToCallback: true
}, function (req, accessToken, refreshToken, profile, done) {
  User.findOne({
    facebookID: profile.id
  }, function (err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      newUser = new User({
        name: profile.displayName,
        facebookID: profile.id
      });
      newUser.save(function (err) {
        req.session.currentUser = user;
        if (err) console.log(err);
        return done(err, user);
      });
    } else {
      req.session.currentUser = user;
      return done(err, user)
    }
  });
}));