import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import Card from '../UI/Card';

const NewExpense = (props) => {
  let [form, toggleForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const data = { id: Math.random() + '', ...enteredExpenseData };
    toggleHandler();
    props.onSaveExpenseData(data);
  };

  const toggleHandler = () => {
    toggleForm((prev) => {
      return !prev;
    });
  };

  return (
    <Card className='newExpense'>
      {!form && <button onClick={toggleHandler}>+ New Expense</button>}
      {form && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          closeForm={toggleHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
