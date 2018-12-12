const _ = require('lodash');
const faker = require('faker');

const fs = require('fs');

const projects = _.times(5, () => ({
  title: faker.company.catchPhrase(),
  category: 'Third Sector',
  description: faker.lorem.paragraph(),
  dateLimit: faker.date.future(),
  // owner:,
  // dev:
  status: 'waiting',
  solicitation: false

}));

const data = JSON.stringify(projects);
fs.writeFileSync('projectsFaker.json', data);
