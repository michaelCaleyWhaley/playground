// expenses reducer
// default state
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(expense => expense.id !== action.id);
      return state;
    case "EDIT_EXPENSE":
      return state.map(currentValue => {
        if (currentValue.id === action.id) {
          return {
            ...currentValue,
            ...action.updates,
          };
        } else {
          return currentValue;
        }
      });
    default:
      return state;
  }
};

export default expensesReducer;
