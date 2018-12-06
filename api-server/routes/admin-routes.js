const express = require('express');
const Administrator = require('../models/admin-model');

const router = express.Router();

// Route to get all Developers
router.get('/adm', (req, res, next) => {
  Administrator.find()
    .then((adm) => {
      console.log('esse é proj do GET details', adm);
      res.json(adm);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Route to create a new Developer
router.post('/adm', (req, res, next) => {
  const theAdm = new Administrator(req.body);
  theAdm.save({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
    .then((adm) => {
      res.json(adm);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Router to get a Developer by ID
router.get('/adm/:id', (req, res, next) => {
  console.log('esse é o conteudo do developer req.params', req.params.id);
  Administrator.findOne({
    _id: req.params.id
  })
    .then((adm) => {
      console.log('esse é adm do get details', adm.name);
      res.json(adm);
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
router.delete('/adm/:id', (req, res, next) => {
  console.log('esse é o conteudo do developer req.params', req.params);
  Administrator.findByIdAndRemove(req.params.id)
    .then((adm) => {
      console.log('esse é adm do get details', adm);
      res.json(adm);
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;
