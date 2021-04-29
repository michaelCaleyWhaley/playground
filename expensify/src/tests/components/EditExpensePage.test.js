import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

describe("EditExpensePage", () => {
  let wrapper;
  let editExpense;
  let removeExpense;
  let history;
  let expense;

  beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    expense = expenses[2];

    wrapper = shallow(
      <EditExpensePage
        editExpense={editExpense}
        removeExpense={removeExpense}
        expense={expense}
        history={history}
      />
    );
  });
  it("should render EditExpensePage", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("when the expense form is submitted", () => {
    it("should call the editExpense prop", () => {
      expect(editExpense).not.toHaveBeenCalled();
      wrapper.find("ExpenseForm").prop("onSubmit")(expense);
      expect(editExpense).toHaveBeenCalledWith(expense.id, expense);
    });
  });

  describe("when the expense is removed", () => {
    it("should call the removeExpense props", () => {
      expect(removeExpense).not.toHaveBeenCalled();
      wrapper.find("button").simulate("click");
      expect(removeExpense).toHaveBeenCalledWith(expense.id);
    });
  });
});
