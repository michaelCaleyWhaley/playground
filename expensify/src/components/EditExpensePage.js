import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    const { props } = this;
    props.editExpense(props.expense.id, expense);
    props.history.push("/");
  };

  onClick = () => {
    const { props } = this;
    props.removeExpense(props.expense.id);
    props.history.push("/");
  };

  render() {
    const { props } = this;

    return (
      <div>
        <ExpenseForm expense={props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (expenseId) => {
    dispatch(removeExpense({ id: expenseId }));
  },
  editExpense: (expenseId, expense) => {
    dispatch(editExpense(expenseId, expense));
  },
});

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
