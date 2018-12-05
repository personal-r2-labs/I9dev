const express = require('express');
const router = express.Router();

const Enterprising = require('../models/emp-model');

router.get('/company/:id', (req, res, next) => {
  console.log("esse é o conteudo do emp req.params", req.params.id);

  Enterprising.findOne({ _id: req.params.id })
  .then((emp) => {
    console.log("esse é emp do GET details", emp.name);
    res.json(emp);
  })
  .catch((error) => {
    console.log(error);
  })
});

router.post('/company', (req, res, next) => {
  const createEmp = new Enterprising(req.body);
  createEmp.save({
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

router.put('/company/:id', (req, res, next) => {
  console.log("esse é o conteudo do emp req.params", req.params);
  const { name, email } = req.body;

  Enterprising.findByIdAndUpdate({ _id: req.params.id }, { name, email })
  .then((emp) => {
    console.log("esse é emp do PUT details", emp);
    res.json(emp);
  })
  .catch((error) => {
    console.log(error);
  })
});

router.delete('/company/:id', (req, res, next) => {
  console.log("esse é o emp req.params", req.params);
  
  Enterprising.findByIdAndRemove(req.params.id)
  .then((dev) => {
    console.log("esse é dev do get details", dev);
    res.json(dev);
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;
