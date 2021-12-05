'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const resortRoutes = require('./routes/resortRoutes');
const UserRoutes = require('./routes/userRoutes')

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', resortRoutes.routes);
app.use('/users', UserRoutes.UserRoutes);


app.listen(config.port, () => console.log('App is listening on url http://:' + config.port));