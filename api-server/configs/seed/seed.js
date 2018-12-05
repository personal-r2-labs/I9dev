const mongoose = require('mongoose');

// Models
const Developer = require('../../models/dev-model');
// const Project = require('../../models/project-model');
// const Enterprising = require('../../models/emp-model');
// const Administrator = require('../../models/admin-model');

// Datasets
const developerData = require('./dev-data.json');
// const projectData = require('./project-data.json');
// const enterprisingData = require('./emp-data.json');
// const adminData = require('./admin-data.json');

const dbtitle = 'i9-db';
mongoose.connect(`mongodb://localhost/${dbtitle}`, {useNewUrlParser: true});
// Drop Collections
Developer.collection.drop();
// Project.collection.drop();
// Enterprising.collection.drop();
// Administrator.collection.drop();

const devData = developerData
developerData.map(developer => {
  const newDeveloper = new Developer(developer)
  return newDeveloper.save()
    .then(dev => dev.name)
    .catch((err) => {
      throw new Error(`Error to add the author. ${err}`);
    });
});
