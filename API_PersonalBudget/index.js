const express = require('express');
const cors = require('cors');
const debug = require('debug')('app:main');

const { Config } = require('./src/config/config');
const { IndexAPI, NotFoundAPI} = require('./src/v1/routes/index.routes');
const { PersonalBudgetAPI } = require('./src/v1/routes/personalBudget.routes');

const app = express();

//Midlewares
app.use(express.json());
app.use(cors());

//Routes
IndexAPI(app);
PersonalBudgetAPI(app);
NotFoundAPI(app);

app.listen(Config.port, () => {
  debug(`Server on ${Config.port}`)
});