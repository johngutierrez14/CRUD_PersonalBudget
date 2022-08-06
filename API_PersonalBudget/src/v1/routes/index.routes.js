const express = require('express');
const createError = require('http-errors');

const { Response } = require('../../common/response');

module.exports.IndexAPI = (app) => {
  const router = express.Router();

  router.get("/", (req, res) => {
    const menu = {
      personalBudget : `http://${req.headers.host}/api/v1/personal-budget`
    };
    Response.success(res, 200, "Personal Budget", menu);
  });
  app.use("/", router);
};

module.exports.NotFoundAPI = (app) => {
  const router = express.Router();  

  router.all('/*', (req, res, next) => {
    const apiEndpoints = router.stack.filter(r => r.route).map(r => r.route.path);
  
    if (!apiEndpoints.includes(req.path)) return res.status(404).json({ code: 404, name: 'Invalid route', message: 'Endpoint not found.' });
    else return next();
  });

  app.use("/", router)
};