import ExpensesFilter from '../expenses-filter/expenses-filter.component';
import ExpensesList from '../expenses-list/expenses-list.component';
import Card from '../card/card.component';
import ExpensesChart from '../expenses-chart/expenses-chart.component';
import './expenses.style.css';
import { useState } from 'react';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          oncChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
