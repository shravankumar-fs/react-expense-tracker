import React from 'react';
import './ExpenseDate.css';
import Card from '../UI/Card';

export class ExpenseDate extends React.Component {
  constructor(props) {
    super(props);
    this.month = props.date.toLocaleString('en-US', { month: 'long' });
    this.day = props.date.toLocaleString('en-US', { day: '2-digit' });
    this.year = props.date.getFullYear();
  }

  render() {
    return (
      <Card className='dateDisplay'>
        <div>{this.day}</div>
        <div>{this.month}</div>
        <div>{this.year}</div>
      </Card>
    );
  }
}
