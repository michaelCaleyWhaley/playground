import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

test("should render ExpenseListItem correctly", () => {
  const props = expenses[0];
  const wrapper = shallow(<ExpenseListItem {...props} />);
  expect(wrapper).toMatchSnapshot();
});
