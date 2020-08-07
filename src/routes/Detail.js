import React from "react";
import { connect } from "react-redux";
import { remove } from "../store";

const Detail = ({ text, createdAt, removeToDoClick }) => {
  return (
    <>
      <h1>{text}</h1>
      <h5>Created At: {createdAt}</h5>
      <button onClick={removeToDoClick}>Del</button>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  const {
    history,
    match: {
      params: { id },
    },
  } = ownProps;

  try {
    const { text, id: created_at } = state.find(
      (toDo) => toDo.id === parseInt(id)
    );
    const d = new Date(created_at);
    const createdAt = d.toString();

    return { text, createdAt };
  } catch {
    history.goBack();
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    removeToDoClick: () => {
      dispatch(remove(parseInt(id)));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
