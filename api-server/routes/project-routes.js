/* eslint-disable no-undef */
const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
const Project = require('../models/project-model');


// Route to get all Projects
router.get('/projects', (req, res) => {
  Project.find()
    .then((proj) => {
      res.json(proj);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Route to create a new Project
router.post('/projects', (req, res) => {
  const { title, description, category, dateLimit, solicitation } = req.body;
  Project.create({
    title,
    description,
    category,
    dateLimit,
    solicitation
  })
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Router to get a Project by ID
router.get('/projects/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  Project.findById(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Route to update a project
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

// Route to delete a Project
router.delete('/projects/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Project.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `Project with ${req.params.id} is removed successfully.` });
    })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;
