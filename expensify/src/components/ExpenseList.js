import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import SelectExpenses from "../selectors/expenses";

export const ExpenseList = ({ expenses, filters }) => (
  <div>
    <h1>Expense List</h1>
    {filters.text && <p>Filter: {filters.text}</p>}
    <ul>
      {expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        expenses.map((expense, index) => (
          <ExpenseListItem key={index} {...expense} />
        ))
      )}
    </ul>
  </div>
);

const mapStateToProps = (state) => ({
  ...state,
  expenses: SelectExpenses(state.expenses, state.filters),
});
export default connect(mapStateToProps)(ExpenseList);
