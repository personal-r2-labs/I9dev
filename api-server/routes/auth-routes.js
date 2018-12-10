const express = require('express');
const User = require('../models/user-model');
const passport = require('../configs/passport/strategy');

const router = express.Router();

// Route to create a new user account 
router.post('/signup/dev', (req, res, next) => {
  const theUser = new User(req.body);
  theUser.role = 'dev';
  console.log('este é o resultado do req body', req.body);
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
  const theEnt = new User(req.body);
  theEnt.role = 'ent';
  console.log('este é o resultado do req body ent', req.body);
  theEnt.save({
  })
    .then((ent) => {
      console.log('Este é o novo ent criado', ent);
      res.json(ent);
    })
    .catch((error) => {
      console.log('Qualquer coisa', error);
    });
});

module.exports = router;