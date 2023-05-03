import { legacy_createStore } from "redux";

const couterReducer = (
  state = { coffee: 0, sugar: 0, isLoggedIn: false },
  action
) => {
  if (action.type === "incrementCoffee") {
    return {
      ...state,
      coffee: state.coffee + 1,
    };
  }
  if (action.type === "decrementCoffee") {
    return {
      ...state,
      coffee: state.coffee - 1,
    };
  }
  if (action.type === "increase") {
    return {
      ...state,
      coffee: state.coffee + action.number,
    };
  }

  if (action.type === "incrementSugar") {
    return {
      ...state,
      sugar: state.sugar + 1,
    };
  }
  if (action.type === "decrementSugar") {
    return {
      ...state,

      sugar: state.sugar - 1,
    };
  }
  if (action.type === "increaseSugar") {
    return {
      ...state,

      sugar: state.sugar + action.number,
    };
  }
  if (action.type === "logIn") {
    return {
      ...state,

      isLoggedIn: true,
    };
  }
  if (action.type === "logOut") {
    return {
      ...state,
      isLoggedIn: false,
    };
  }
  if (action.type === "resetList") {
    return {
      coffee: 0,
      sugar: 0,
      isLoggedIn: state.isLoggedIn,
    };
  }
  return state;
};

const store = legacy_createStore(couterReducer);

export default store;
