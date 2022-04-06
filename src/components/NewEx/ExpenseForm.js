import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: 0,
    date: '',
  });
  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: +event.target.value,
      };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    userInput.date = new Date(userInput.date);
    props.onSaveExpenseData(userInput);
    setUserInput((prevState) => {
      return {
        title: '',
        amount: '',
        date: '',
      };
    });
  };

  const closeForm = () => {
    props.closeForm();
  };

  return (
    <form className='expenseForm' onSubmit={submitHandler}>
      <div className='Controls'>
        <div className='Control'>
          <label>Title</label>
          <input
            type='text'
            value={userInput.title}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className='Control'>
          <label>Amount</label>
          <input
            type='number'
            min='1'
            step='1'
            max='700'
            value={userInput.amount}
            placeholder='Enter $'
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className='Control'>
          <label>Date</label>
          <input
            type='date'
            min='2020-01-01'
            max='2022-12-31'
            value={userInput.date}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className='Actions'>
        <button type='submit'>Submit</button>
        <button onClick={closeForm}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
