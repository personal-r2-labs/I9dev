require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const hbs = require('hbs');
const logger = require('morgan');
const path = require('path');

const session = require ('express-session');
const passport = require('passport');

require('./configs/mongodb');

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

//Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.locals.title = 'i9Dev - The best Big Monster';

const dev = require('./routes/dev-routes');
app.use('/dev', dev);

const emp = require('./routes/emp-routes');
app.use('/emp', emp);

const project = require('./routes/project-routes');
app.use('/project', project);

module.exports = app;
