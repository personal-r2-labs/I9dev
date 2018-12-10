const express = require('express');
const User = require('../models/user-model');

const router = express.Router();

// Route to get all Developers
router.get('/dev', (req, res, next) => {
  User.find()
    .then((dev) => {
      console.log('esse é proj do GET details', dev);
      res.json(dev);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Route to create a new User
// router.post('/dev', (req, res, next) => {
//   const theUser = new User(req.body, { role: dev });
//   theUser.save({
//     name: req.body.name,
//     email: req.body.email,
//     role: 'dev'
//   })
//     .then((user) => {
//       res.json(user);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// Router to get a User by ID
router.get('/dev/:id', (req, res, next) => {
  console.log('esse é o conteudo do User req.params', req.params.id);
  User.findOne({
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
//   console.log('esse é o conteudo do User req.params', req.params);

//   const {
//     name,
//     email
//   } = req.body;
//   User.findByIdAndUpdate({
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

// Route to delete a User
router.delete('/dev/:id', (req, res, next) => {
  console.log('esse é o conteudo do User req.params', req.params);
  User.findByIdAndRemove(req.params.id)
    .then((dev) => {
      console.log('esse é dev do get details', dev);
      res.json(dev);
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;
