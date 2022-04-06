import React from 'react';
import './ExpenseList.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesListDisplay from './ExpensesListDisplay';
import ExpensesChart from './ExpensesChart';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filteredYear: 'none' };
    this.props = props;
    this.alterListData = this.alterListData.bind(this);
  }

  alterListData(year) {
    this.setState({
      filteredYear: year,
    });
  }

  filteredList = () =>
    this.props.items.filter(
      (item) =>
        this.state.filteredYear === 'none' ||
        item.date.getFullYear().toString() === this.state.filteredYear
    );

  render() {
    return (
      <div>
        <Card className='expenseList'>
          <ExpensesFilter
            selected={this.state.filteredYear}
            onFilter={this.alterListData}
          />
          <ExpensesChart expenses={this.filteredList()} />
          <ExpensesListDisplay list={this.filteredList()} />
        </Card>
      </div>
    );
  }
}
export default ExpenseList;
