import React from 'react';

import TodoListItem from '../TodoListItem';

import './TodoList.css';

const TodoList = ({ data }) => {
  const items = data.map(item => {
    const { id, ...restParams } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...restParams} />
      </li>
    );
  });
  return <ul className="list-group todo-list">{items} </ul>;
};

export default TodoList;
