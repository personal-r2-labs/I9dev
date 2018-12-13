/* eslint-disable no-undef */
const mongoose = require('mongoose');

// Models
const User = require('../../models/user-model');
const Project = require('../../models/project-model');

// Datasets
const userData = require('./user-data.json');
const projectData = require('./project-data.json');

//Configure Bcrypt
const bcrypt = require('bcrypt');


const dbtitle = 'i9-db';
mongoose.connect(`mongodb://localhost:27017/${dbtitle}`, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
    // mongoose.connection.db.dropCollection('users', () => {
    //   userData.forEach((user) => {
    //     const salt = bcrypt.genSaltSync(10);
    //     const hashPass = bcrypt.hashSync(user.password, salt);
    //     user.password = hashPass;
    //     const newUser = new User(user);
    //     newUser.save()
    //       .then(() => {
    //         console.log(newUser);
    //         mongoose.connection.close();
    //       })
    //       .catch((err) => {
    //         throw new Error(`Error to add the user. ${err}`);
    //       });
    //   });
    // });
    mongoose.connection.db.dropCollection('projects', () => {
      projectData.map((project) => {
        const newProject = new Project(project);
        newProject.save()
          .then(() => {
            console.log(newProject);
            mongoose.connection.close();
          })
          .catch((err) => {
            throw new Error(`Error to add the project. ${err}`);
          });
      });
    });
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });
