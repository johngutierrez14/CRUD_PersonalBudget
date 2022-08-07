import React, { Component } from 'react';

const BudgetList = ({ budgets }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Type</th>
          <th scope="col">Concept</th>
          <th scope="col">Amount</th>
          <th scope="col">Date</th>
          <th scope="col">Last update</th>
        </tr>
      </thead>
      <tbody>
        {budgets.map(budgets => {
          <tr key={budgets.id}>
            <th scope="row">{budgets.id}</th>
            <td>{budgets.type}</td>
            <td>{budgets.concept}</td>
            <td>{budgets.amount}</td>
            <td>{budgets.datePayment}</td>
            <td>{budgets.currentdate}</td>
            <td><button type='button' className='btn btn-outline-warning'><i class="bi bi-pencil-square"></i></button></td>
            <td><button type='button' className='btn btn-outline-danger'><i class="bi bi-trash"></i></button></td>
          </tr>
        })}
      </tbody>
    </table>
  );
}

export default BudgetList;
