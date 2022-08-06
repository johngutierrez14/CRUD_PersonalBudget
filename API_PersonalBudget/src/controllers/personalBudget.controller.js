const debug = require('debug')('app:module-controller');

const { Connection } = require('../database/database');
const { Response } = require('../common/response')

module.exports.PersonalBudgetController = {
  getAllBudget: async (req, res) => {
    try {
      await Connection.connection.query("SELECT * FROM budget", (err, result) => {
        if (err) throw err
        Response.success(res, 200, 'Personal budget list', result)
      });
    }
    catch (error) {
      debug(error);
      Response.error(error)
    }
  },
  getOneBudget: async (req, res) => {
    try {
      await Connection.connection.query("SELECT * FROM budget WHERE id = ?", [req.params.id], (err, result) => {
        if (err) throw err
        Response.success(res, 200, 'Personal budget list', result)
      });
    } catch (error) {
      debug(error);
      Response.error(error)
    }
  },
  createBudget: async (req, res) => {
    try {
      await Connection.connection.query('INSERT INTO budget SET ?', [req.body], (err, result) => {
        if (err) throw err
        Response.success(res, 201, 'Personal budget add', result.insertId)
      });
    } catch (error) {
      debug(error);
      Response.error(error)
    }
  },
  deleteBudget: async (req, res) => {
    try {
      await Connection.connection.query('DELETE FROM budget WHERE id = ?', [req.params.id], (err, result) => {
        if (err) throw err
        Response.success(res, 200, 'Personal budget delete', result.affectedRows)
      });
    } catch (error) {
      debug(error);
      Response.error(error)
    }
  },
  updateBudget: async (req, res) => {
    try {
      await Connection.connection.query('UPDATE budget SET ? WHERE id = ?', [req.body, req.params.id], (err, result) => {
        if (err) throw err
        Response.success(res, 201, 'Personal budget update', result.changedRows)
      });
    } catch (error) {
      debug(error);
      Response.error(error)
    }
  },
};