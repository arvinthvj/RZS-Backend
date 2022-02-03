'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const resortRoutes = require('./routes/resortRoutes');
const { twitterRoutes } = require('./routes/twitterRoutes');
const { task } = require('./CronIt/WhatToDo');

const app = express();

app.use(express.json());
task.start();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', resortRoutes.routes);
app.use('/tw', twitterRoutes);



app.listen(config.port, () => console.log('App is listening on url http://:' + config.port));