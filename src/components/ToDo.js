import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

const ToDo = ({ text, id, removeToDoClick }) => {
  return (
    <li id={id}>
      <Link to={`/${id}`}>{text} </Link>
      <button onClick={removeToDoClick}>Del</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    removeToDoClick: () => dispatch(actionCreators.removeToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
