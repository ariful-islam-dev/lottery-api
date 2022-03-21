require('dotenv').config('../.env');

const express = require('express');
const { notFoundHandler, errorHandler } = require('./error');

const myDB = require('../db/db');
const morgan = require('morgan');


const app = express();
app.use(express.json())

// myDB.create('user 1', 10)
// myDB.create('user 2', 10)
// myDB.create('user 3', 10)
// myDB.create('user 4', 10)
// myDB.create('user 5', 10)

// myDB.bulkCreate('user 6', 10, 5)

// const ticket = myDB.find();
// console.log('All Tickets ',ticket);
// const winners = myDB.draw(3);
// console.log('Winners ' ,winners);



app.use(require('./routes'))

// app.use(require('./routes'))
app.use(notFoundHandler)
app.use(errorHandler)
app.use(morgan('dev'))

module.exports = app;