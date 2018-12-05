const express = require('express');
const router = express.Router();

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Developer = require('../models/dev-model');

router.get('/user/:id', (req, res, next) => {
  console.log("esse é o conteudo do developer req.params", req.params.id);
  Developer.findOne({ _id: req.params.id })
  .then((dev) => {
    console.log("esse é dev do get details", dev.name);
    res.json(dev);
  })
  .catch((error) => {
    console.log(error);
  })
});

router.post('/user', (req, res, next) => {
  const theUser = new Developer(req.body);
  theUser.save({
      name: req.body.name,
      email: req.body.email,
    })
    .then(response => {
      res.json(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.put('/user/:id', (req, res, next) => {
  console.log("esse é o conteudo do developer req.params", req.params);

  const { name, email } = req.body;
  Developer.findByIdAndUpdate({ _id: req.params.id }, { name, email })
  .then((dev) => {
    console.log("esse é dev do get details", dev);
    res.json(dev);
  })
  .catch((error) => {
    console.log(error);
  })
});

router.delete('/user/:id', (req, res, next) => {
  console.log("esse é o conteudo do developer req.params", req.params);
  
  Developer.findByIdAndRemove(req.params.id)
  .then((dev) => {
    console.log("esse é dev do get details", dev);
    res.json(dev);
  })
  .catch((error) => {
    console.log(error);
  })
});


module.exports = router;

module.exports = router;

