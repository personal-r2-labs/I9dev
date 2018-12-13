/* eslint-disable no-undef */
const express = require('express');

const mongoose = require('mongoose');
const User = require('../models/user-model');

const router = express.Router();

// Route to get all Users
router.get('/user', (req, res) => {
  User.find({ role: req.body.role })
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Router to get a User by ID
router.get('/user/:id', (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => {
      console.log(user);
      res.json(user);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Route to update a User
router.put('/projects/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Project.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Project with ${req.params.id} is updated successfully.` });
    })
    .catch((err) => {
      res.json(err);
    });
});

// Route to delete a User
router.delete('/user/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
