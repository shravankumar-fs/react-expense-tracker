import React from 'react';
import './ExpenseItem.css';
import { ExpenseDate } from './ExpenseDate';
import Card from '../UI/Card';

export class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.item = props.data;
  }

  render() {
    return (
      <li>
        <Card className='expenseRow'>
          <ExpenseDate date={this.item.date}></ExpenseDate>
          <h3>{this.item.title}</h3>
          <Card className='expenceRowPrice'>${this.item.amount}</Card>
        </Card>
      </li>
    );
  }
}
