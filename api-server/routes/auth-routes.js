const express = require('express');
const User = require('../models/user-model');
const passport = require('../configs/passport/strategy');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

const router = express.Router();

// Route to create a new user account 
router.post('/signup/dev', (req, res, next) => {
  const { name, username, password } = req.body;
  console.log('este é o resultado dos dados enviados dev form', req.body);

  let salt;
  let hashPass;
  console.log(password);
  if (password !== undefined) {
    salt = bcrypt.genSaltSync(bcryptSalt);
    hashPass = bcrypt.hashSync(password, salt);
  }

  const theUser = new User({
    name,
    username,
    password: hashPass
  });
  theUser.role = 'dev';

  theUser.save({
  })
    .then((dev) => {
      console.log('Este é o novo dev criado', dev);
      res.json(dev);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/signup/ent', (req, res, next) => {
  const { name, username, password } = req.body;
  console.log('este é o resultado dos dados enviados pelo ent form', req.body);

  let salt;
  let hashPass;
  console.log(password);
  if (password !== undefined) {
    salt = bcrypt.genSaltSync(bcryptSalt);
    hashPass = bcrypt.hashSync(password, salt);
  }

  const theUser = new User({
    name,
    username,
    password: hashPass
  });
  theUser.role = 'ent';

  theUser.save({
  })
    .then((ent) => {
      console.log('Este é o novo ent criado', ent);
      res.json(ent);
    })
    .catch((error) => {
      console.log(error);
    });
});

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated() || req.user) {
    return next();
  }
  res.status(400).json({ message: 'Pedido negado' });
};


// Route to login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/signup',
  passReqToCallback: true
}));

// Route to logout
router.get('/logout', ensureAuthenticated, (req, res, next) => {
  if (!req.user) {
    res.redirect('/');
    return;
  }
  req.logout();
  res.redirect('/');
});

module.exports = router;