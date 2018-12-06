const express = require('express');
const Enterprising = require('../models/ent-model');

const router = express.Router();

// Route to get all Enterprisings
router.get('/ent', (req, res, next) => {
  Enterprising.find()
    .then((ent) => {
      console.log('esse é proj do GET details', ent);
      res.json(ent);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Route to create a new Enterprising
router.post('/ent', (req, res, next) => {
  const createEnt = new Enterprising(req.body);
  createEnt.save({
    name: req.body.name,
    email: req.body.email
  })
    .then((ent) => {
      res.json(ent);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Router to get a Enterprising by ID
router.get('/ent/:id', (req, res, next) => {
  console.log('esse é o conteudo do emp req.params', req.params.id);
  Enterprising.findOne({ _id: req.params.id })
    .then((ent) => {
      console.log('esse é ent do GET details', ent.name);
      res.json(ent);
    })
    .catch((error) => {
      console.log(error);
    });
});

// router.patch('/ent/:id', (req, res, next) => {
//   console.log('esse é o conteudo do emp req.params', req.params);
//   const { name, email } = req.body;
//   Enterprising.findByIdAndUpdate({ _id: req.params.id }, { name, email })
//     .then((ent) => {
//       console.log('esse é ent do PUT details', ent);
//       res.json(ent);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// Route to delete a Enterprising
router.delete('/ent/:id', (req, res, next) => {
  console.log('esse é o ent req.params', req.params);
  Enterprising.findByIdAndRemove(req.params.id)
    .then((ent) => {
      console.log('esse é ent do get details', ent);
      res.json(ent);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
