const express = require('express');
const Developer = require('../models/dev-model');

const router = express.Router();

// Route to get all Developers
router.get('/dev', (req, res, next) => {
  Developer.find()
    .then((dev) => {
      console.log('esse é proj do GET details', dev);
      res.json(dev);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Route to create a new Developer
router.post('/dev', (req, res, next) => {
  const theDev = new Developer(req.body);
  theDev.save({
    name: req.body.name,
    email: req.body.email
  })
    .then((dev) => {
      res.json(dev);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Router to get a Developer by ID
router.get('/dev/:id', (req, res, next) => {
  console.log('esse é o conteudo do developer req.params', req.params.id);
  Developer.findOne({
    _id: req.params.id
  })
    .then((dev) => {
      console.log('esse é dev do get details', dev.name);
      res.json(dev);
    })
    .catch((error) => {
      console.log(error);
    });
});

// router.patch('/dev/:id', (req, res, next) => {
//   console.log('esse é o conteudo do developer req.params', req.params);

//   const {
//     name,
//     email
//   } = req.body;
//   Developer.findByIdAndUpdate({
//     _id: req.params.id
//   }, {
//     name,
//     email
//   })
//     .then((dev) => {
//       console.log('esse é dev do get details', dev);
//       res.json(dev);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// Route to delete a Developer
router.delete('/dev/:id', (req, res, next) => {
  console.log('esse é o conteudo do developer req.params', req.params);
  Developer.findByIdAndRemove(req.params.id)
    .then((dev) => {
      console.log('esse é dev do get details', dev);
      res.json(dev);
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;
