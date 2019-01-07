import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ text, priority = false }) => {
  const itemStyle = {
    color: priority ? 'royalblue' : 'black',
    fontWeight: priority ? 'bold' : 'normal',
  };
  return (
    <span className="todo-list-item">
      <span className="todo-list-item-text" style={itemStyle}>
        {text}
      </span>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
      >
        <i className="fa fa-exclamation" />
      </button>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
