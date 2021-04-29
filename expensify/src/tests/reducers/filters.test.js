import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const currentState = {
    text: "terror",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };
  const action = { type: "SET_TEXT_FILTER", text: "caley" };
  const state = filtersReducer(currentState, action);
  expect(state.text).toBe("caley");
});

test("should set startDate", () => {
  const currentState = {
    text: "terror",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };
  const startDate = moment().startOf("day");
  const action = { type: "SET_START_DATE", startDate: startDate };
  const state = filtersReducer(currentState, action);
  expect(state.startDate).toBe(startDate);
});

test("should set endDate", () => {
  const currentState = {
    text: "terror",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };
  const endDate = moment().startOf("day");
  const action = { type: "SET_END_DATE", endDate };
  const state = filtersReducer(currentState, action);
  expect(state.endDate).toBe(endDate);
});

