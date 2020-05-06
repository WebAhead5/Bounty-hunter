const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser')
const favicon = require('serve-favicon')

const controllers = require('./controllers/index')
require('dotenv').config();

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cookieParser())

app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main'
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 4000);

app.use(controllers);

module.exports = app;