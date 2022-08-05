module.exports.PersonalBudgetController = {
  getAllBudget : (req, res) => {
    res.send('All budget');
  },
  getOneBudget : (req, res) => {
    res.send('One budget');
  },
  createBudget : (req, res) => {
    res.send('create budget');
  },
  deleteBudget : (req, res) => {
    res.send('delete budget');
  },
  updateBudget : (req, res) => {
    res.send('update budget');
  },
};