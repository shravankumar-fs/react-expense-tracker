import { useState } from 'react';
import ExpenseList from './components/expense/ExpenseList';
import NewExpense from './components/NewEx/NewExpense';
import './App.css';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'History Books',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: 'e2',
    title: 'Plasma LED',
    amount: 253.49,
    date: new Date(2020, 2, 7),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 699.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Wooden Desk',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e5',
    title: 'Macbook Pro',
    amount: 699,
    date: new Date(2021, 1, 23),
  },
  {
    id: 'e6',
    title: 'Iphone XR 11',
    amount: 599,
    date: new Date(2020, 7, 10),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (data) => {
    setExpenses((prevList) => {
      console.log([data, ...prevList]);
      return [data, ...prevList];
    });
  };
  return (
    <div className='app'>
      <NewExpense onSaveExpenseData={addExpenseHandler} />
      <ExpenseList items={expenses} />
    </div>
  );
}

export default App;
