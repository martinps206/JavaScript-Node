const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(require('./routes/index'))

module.exports = app;

/*
Comando Docker
docker build -t node-restapi .
docker image
docker run -it -p 4000:3000 node-restapi
*/