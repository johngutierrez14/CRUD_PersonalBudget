import React from 'react'

const Form = () => {
  return (
    <form>
      <div className="form-floating mb-3">
        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
          <option selected>Open this select menu</option>
          <option value="earnings">Earnings</option>
          <option value="expenses">Expenses</option>
        </select>
        <label for="floatingSelect">select category</label>
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id='conceptBudget' name='conceptBudget ' placeholder="Concept" />
        <label for='conceptBudget'>Concept</label>
      </div>
      <div className="form-floating mb-3">
        <input type="number" className="form-control" id='amountBudget' name='amountBudget ' placeholder="Amount" />
        <label for='amountBudget'>Amount</label>
      </div>
      <div className="form-floating mb-3">
        <input type="date" className="form-control" id='dateBudget' name='dateBudget ' placeholder="Date of payment" />
        <label for='dateBudget'>Date of payment</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Form;