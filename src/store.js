import { createStore } from "redux";

const ADD = "ADD";
const REMOVE = "REMOVE";

export const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const removeToDo = (id) => {
  return {
    type: REMOVE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case REMOVE:
      return state.filter((toDo) => toDo !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
