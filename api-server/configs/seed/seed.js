const mongoose = require('mongoose');

// Models
const Developer = require('../../models/user-model');
const Project = require('../../models/project-model');
// const Enterprising = require('../../models/ent-model');
// const Administrator = require('../../models/admin-model');

// Datasets
const developerData = require('./dev-data.json');
const projectData = require('./project-data.json');
// const enterprisingData = require('./emp-data.json');
// const administratorData = require('./admin-data.json');

const dbtitle = 'i9-db';
mongoose.connect(`mongodb://localhost:27017/${dbtitle}`, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
    mongoose.connection.db.dropCollection('developers', () => {
      developerData.map((developer) => {
        const newDeveloper = new Developer(developer);
        newDeveloper.save()
          .then(() => {
            console.log(newDeveloper);
            mongoose.connection.close();
          })
          .catch((err) => {
            throw new Error(`Error to add the developer. ${err}`);
          });
      });
    });
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
    // mongoose.connection.db.dropCollection('enterprisings', () => {
    //   enterprisingData.map((enterprising) => {
    //     const newEnterprising = new Enterprising(enterprising);
    //     newEnterprising.save()
    //       .then(() => {
    //         console.log(newEnterprising);
    //         mongoose.connection.close();
    //       })
    //       .catch((err) => {
    //         throw new Error(`Error to add the enterprising. ${err}`);
    //       });
    //   });
    // });
    // mongoose.connection.db.dropCollection('administrators', () => {
    //   administratorData.map((administrator) => {
    //     const newAdministrator = new Administrator(administrator);
    //     newAdministrator.save()
    //       .then(() => {
    //         console.log(newAdministrator);
    //         mongoose.connection.close();
    //       })
    //       .catch((err) => {
    //         throw new Error(`Error to add the administrator. ${err}`);
    //       });
    //   });
    // });
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });
