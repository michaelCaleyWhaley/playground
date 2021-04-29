import uuid from "uuid";
import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

jest.mock("uuid");
uuid.mockImplementation(() => "1234");

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "123abc" });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", "testUpdate");
  expect(action).toEqual({
    id: "123abc",
    updates: "testUpdate",
    type: "EDIT_EXPENSE",
  });
});

test("should setup the add expense action object with provided values", () => {
  const action = addExpense({
    description: "test description",
    note: "test note",
    amount: "test amount",
    createdAt: 1,
  });
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "test description",
      note: "test note",
      amount: "test amount",
      createdAt: 1,
      id: uuid(),
    },
  });
});

test("should setup the add expense action object with default values", () => {
  const action = addExpense();
  expect({
    type: "ADD_EXPENSE",
    expense: {
      id: uuid(),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});
