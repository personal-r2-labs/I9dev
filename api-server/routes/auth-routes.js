const express = require('express');
const User = require('../models/user-model');
const passport = require('../configs/passport/strategy');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

const router = express.Router();

// Route to create a new user account 
router.post('/signup/dev', (req, res, next) => {
  const { username, password } = req.body;
  console.log('este é o resultado dos dados enviados dev form', req.body);

  let salt;
  let hashPass;
  console.log(password);
  if (password !== undefined) {
    salt = bcrypt.genSaltSync(bcryptSalt);
    hashPass = bcrypt.hashSync(password, salt);
  }

  const theUser = new User({
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
  const { username, password } = req.body;
  console.log('este é o resultado dos dados enviados pelo ent form', req.body);

  let salt;
  let hashPass;
  console.log(password);
  if (password !== undefined) {
    salt = bcrypt.genSaltSync(bcryptSalt);
    hashPass = bcrypt.hashSync(password, salt);
  }

  const theUser = new User({
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

module.exports = router;