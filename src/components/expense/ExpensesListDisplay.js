import React from 'react';
import { ExpenseItem } from './ExpenseItem';
import './ExpensesListDisplay.css';
class ExpensesListDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    if (this.props.list.length === 0) {
      return <p>Found No Expenses</p>;
    }
    return (
      <div>
        {this.props.list.map((item) => (
          <ExpenseItem key={item.id} data={item} />
        ))}
      </div>
    );
  }
}

export default ExpensesListDisplay;
