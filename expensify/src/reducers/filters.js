import moment from "moment";

// filters reducers
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date", // date or amount
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SET_START_DATE":
      const startDate = action.startDate;
      return { ...state, startDate };
    case "SET_END_DATE":
      const endDate = action.endDate;
      return { ...state, endDate };
    default:
      return state;
  }
};

export default filtersReducer;
