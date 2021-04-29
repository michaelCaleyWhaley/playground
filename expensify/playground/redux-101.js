// side note - pure functions are functions thats output are only determined by the input. e.g. no global variables
//  reducers are pure functions

import { createStore } from "redux";

//Action generators - functions that return action objects
// first example destructures the expected object setting the default to 1 and also defaults an empty object if none is passed in
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy: typeof incrementBy === "number" ? incrementBy : 1
});

const decrementCount = (payload = {}) => ({
  type: "DECREMENT",
  decrementBy: typeof payload.decrementBy === "number" ? payload.decrementBy : 1
});

const resetCount = () => ({
  type: "RESET"
});

const setCount = (payload = {}) => ({
  type: "SET",
  count: payload.count
});

// REDUCER
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const { incrementBy } = action;
      return {
        count: state.count + incrementBy
      };
    case "DECREMENT":
      const { decrementBy } = action;
      return {
        count: state.count - decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};
const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState().count);
});

store.dispatch(incrementCount({ incrementBy: 40 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());
// store.dispatch({
//   type: "RESET"
// });

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(setCount({ count: 200 }));
// store.dispatch({
//   type: "SET",
//   count: 101
// });
