import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter;
let sortByDate;
let sortByAmount;
let setStartDate;
let setEndDate;
let wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alternate data correctly", () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  wrapper.find("input").simulate("change", { target: { value: "Rent" } });
  expect(setTextFilter).toHaveBeenLastCalledWith("Rent");
});

test("should sort by date", () => {
  wrapper.find("select").simulate("change", { target: { value: "date" } });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  wrapper.find("select").simulate("change", { target: { value: "amount" } });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
  wrapper
    .find("DateRangePicker")
    .simulate("datesChange", { startDate: 1, endDate: 2 });
  expect(setStartDate).toHaveBeenCalledWith(1);
  expect(setEndDate).toHaveBeenCalledWith(2);
});

test("should handle date focus changes", () => {
  wrapper.find("DateRangePicker").simulate("focusChange", "endDate");
  expect(wrapper.state("calendarFocused")).toBe("endDate");
});
