import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

// const ADD = "ADD";
// const REMOVE = "REMOVE";

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const removeToDo = (id) => {
//   return {
//     type: REMOVE,
//     id,
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case REMOVE:
//       return state.filter((toDo) => {
//         return toDo.id !== action.id;
//       });
//     default:
//       return state;
//   }
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case removeToDo.type:
//       return state.filter((toDo) => {
//         return toDo.id !== action.payload;
//       });
//     default:
//       return state;
//   }
// };

const addToDo = createAction("ADD");
const removeToDo = createAction("REMOVE");

// Redux Toolkit 으로 Reducer를 짤때는 state mutate 가능
// but, state mutate 시에는 no return, 새 state 생성은 return
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() }); // state mutate : no return
  },
  [removeToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload), // new state : return
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  removeToDo,
};

export default store;
