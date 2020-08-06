import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const ToDo = ({ text, id, removeToDoClick }) => {
  return (
    <li id={id}>
      {text} <button onClick={removeToDoClick}>Del</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    removeToDoClick: () => dispatch(actionCreators.removeToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
