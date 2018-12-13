const _ = require('lodash');
const faker = require('faker/locale/pt_BR');

const fs = require('fs');

const projects = _.times(10, () => ({
  username: faker.internet.userName(),
  password: 1234,
  name: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.exampleEmail(),
  phone: faker.phone.phoneNumber(),
  zipcode: faker.address.zipCode(),
  address: faker.address.streetAddress()
  // // owner:,
  // // dev:
  // status: 'waiting',
  // solicitation: false

}));

const data = JSON.stringify(projects);
fs.writeFileSync('userFakerPets.json', data);
