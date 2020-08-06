import { createStore } from "redux";

const ADD = "ADD";
const REMOVE = "REMOVE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const removeToDo = (id) => {
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
      return state.filter((toDo) => {
        return toDo.id !== action.id;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  removeToDo,
};

export default store;
