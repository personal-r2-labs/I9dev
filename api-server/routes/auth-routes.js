const express = require('express');
const User = require('../models/user-model');
const Enterprising = require('../models/ent-model');
const passport = require('../configs/passport/strategy');

const router = express.Router();

// Route to create a new user account 
router.post('/signup/dev', (req, res, next) => {
  const theUser = new User(req.body);

  console.log('este é o resultado do req body', req.body);
  
  theUser.save({
    // name: req.body.name,
    // email: req.body.email,
    // password: req.body.password,
    role: 'dev'
  })
    .then((dev) => {
      console.log('Este é o novo dev criado', dev);
      res.json(dev);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/signup/ent', passport.authenticate('local'), (req, res, next) => {
  const theEnt = new Enterprising(req.body);
  console.log('este é o resultado do req body ent', req.body);
  theEnt.save({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
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