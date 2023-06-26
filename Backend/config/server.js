const express = require('express');
const morgan = require('morgan');
const droneRoutes = require('../routes/droneRoutes');
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api', droneRoutes);

module.exports = app;
