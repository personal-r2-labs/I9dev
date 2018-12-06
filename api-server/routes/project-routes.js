const express = require('express');
const router = express.Router();

const Project = require('../models/project-model');

router.get('/projects/:id', (req, res, next) => {
  console.log("esse é o conteudo do proj req.params", req.params.id);

  Project.findOne({
      _id: req.params.id
    })
    .then((proj) => {
      console.log("esse é proj do GET details", proj.name);
      res.json(emp);
    })
    .catch((error) => {
      console.log(error);
    })
});

router.post('/projects', (req, res, next) => {
  const createProj = new Project(req.body);
  createProj.save({
    name: req.body.name,
    email: req.body.email,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.put('/projects/:id', (req, res, next) => {
  console.log("esse é o conteudo do emp req.params", req.params);
  const {
    name,
    email
  } = req.body;

  Project.findByIdAndUpdate({
      _id: req.params.id
    }, {
      name,
      email
    })
    .then((proj) => {
      console.log("esse é proj do PUT details", proj);
      res.json(proj);
    })
    .catch((error) => {
      console.log(error);
    })
});

router.delete('/projects/:id', (req, res, next) => {
  console.log("esse é o proj req.params", req.params);

  Project.findByIdAndRemove(req.params.id)
    .then((proj) => {
      console.log("esse é proj do get details", proj);
      res.json(proj);
    })
    .catch((error) => {
      console.log(error);
    })
});

module.exports = router;