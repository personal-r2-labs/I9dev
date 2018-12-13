const express = require('express');
const User = require('../models/user-model');
const passport = require('passport');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

const router = express.Router();

// Route to create a new user account 
router.post('/signup/dev', (req, res, next) => {
  const { name, username, password } = req.body;
  console.log('este é o resultado dos dados enviados dev form', req.body);

  if (!username || !password) {
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }

  if(password.length < 7){
      res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' });
      return;
  }

  User.findOne({ username }, (err, foundUser) => {

    if(err){
        res.status(500).json({message: "Username check went bad."});
        return;
    }

    if (foundUser) {
        res.status(400).json({ message: 'Username taken. Choose another one.' });
        return;
    }

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    console.log(password);

    const theUser = new User({
      name,
      username,
      password: hashPass
    });
    theUser.role = 'dev';
    console.log('Este é o novo dev criado', theUser);

    theUser.save({
    })
      .then((dev) => {
        res.json(dev);
      })
      .catch((error) => {
        console.log(error);
      });
  })
});

router.post('/signup/ent', (req, res, next) => {
  const { name, username, password } = req.body;
  console.log('este é o resultado dos dados enviados ENT form', req.body);

  if (!username || !password) {
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }

  if(password.length < 7){
      res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' });
      return;
  }

  User.findOne({ username }, (err, foundUser) => {

    if(err){
        res.status(500).json({message: "Username check went bad."});
        return;
    }

    if (foundUser) {
        res.status(400).json({ message: 'Username taken. Choose another one.' });
        return;
    }

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    console.log(password);

    const theUser = new User({
      name,
      username,
      password: hashPass
    });
    theUser.role = 'ent';
    console.log('Este é o novo ENT criado', theUser);

    theUser.save({
    })
      .then((dev) => {
        res.json(dev);
      })
      .catch((error) => {
        console.log(error);
      });
  })
});

// Route to login
router.post('/login', passport.authenticate('local'), (req, res, next) => {
  res.status(200).json(req.user);
  res.redirect('/dev');
});

// Route to logout
router.post('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Log out success!' });
});

module.exports = router;