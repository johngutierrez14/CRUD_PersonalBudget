import './App.css';
import React, { Fragment, useState, useEffect } from 'react';

import Navbar from './components/Home'
import BudgetList from './components/ListBudget';
import Form from './components/Form';

function App() {
  const [budgets, setBudgets] = useState([])

  useEffect(() => {
    const getBudgets = () => {
      fetch('http://localhost:3001/api/v1/personal-budget')
      .then(res => res.json())
      .then(res => setBudgets(res))
    }
    getBudgets()
  }, [])
  

  return (
    <Fragment>
      <Navbar brand='Personal Budget App' />
      <div className='container m-4'>
        <div className='row'>
          <div className="card">
            <div className="card-body">
              Saldo
            </div>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-4'>
            <div className="card">
              <div className="card-body">
              <h4>Form</h4>
              <Form/>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className="card">
              <div className="card-body">
                <h4>Lists of earnings and expenses</h4>
                <BudgetList budgets={budgets}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
