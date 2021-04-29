import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

describe("REMOVE_EXPENSE", () => {
  test("should remove expense by id", () => {
    const action = {
      type: "REMOVE_EXPENSE",
      id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2], expenses[3]]);
  });

  test("should not remove expense if id not found", () => {
    const action = {
      type: "REMOVE_EXPENSE",
      id: "-1"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(state);
  });
});

test("should add expense to state", () => {
  const newExpense = {
    id: 49,
    description: "Gaming monitor",
    note: "",
    amount: "200.00",
    createdAt: 2000
  };
  const action = { type: "ADD_EXPENSE", expense: newExpense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

describe("EDIT_EXPENSE", () => {
  test("should edit an expense", () => {
    const action = {
      type: "EDIT_EXPENSE",
      id: expenses[3].id,
      updates: {
        amount: 199
      }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
      expenses[0],
      expenses[1],
      expenses[2],
      { ...expenses[3], amount: 199 }
    ]);
  });

  test("should not edit an expense if expense not found", () => {
    const action = { type: "EDIT_EXPENSE", id: 1000 };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });
});
