const debug = require('debug')('app:Module-Routes');
const express = require('express');

const { PersonalBudgetController } = require('../../controllers/personalBudget.controller')

const router = express.Router();

module.exports.PersonalBudgetAPI = (app) => {
  router
  .get('/', PersonalBudgetController.getAllBudget)
  .get('/:id', PersonalBudgetController.getOneBudget)
  .post('/', PersonalBudgetController.createBudget)
  .delete('/:id', PersonalBudgetController.deleteBudget)
  .put('/:id', PersonalBudgetController.updateBudget)

  app.use('/api/v1/personal-budget', router)
};