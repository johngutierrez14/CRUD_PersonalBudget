const express = require('express');
const debug = require('debug')('app:main');

const { Config } = require('./src/config/config');
const { IndexAPI, NotFoundAPI} = require('./src/v1/routes/index.routes');
// const {} = require('');

const app = express();

//Midlewares
app.use(express.json());

IndexAPI(app);
NotFoundAPI(app)

app.listen(Config.port, () => {
  debug(`Server on ${Config.port}`)
});