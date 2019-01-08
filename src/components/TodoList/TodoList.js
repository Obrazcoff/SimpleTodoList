import React from 'react';

import TodoListItem from '../TodoListItem';

import './TodoList.css';

const TodoList = ({ data, onDeleted, onChangePriority, onChangeStatus }) => {
  const items = data.map(item => {
    const { id, ...restParams } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...restParams}
          onDeleted={() => onDeleted(id)}
          onChangePriority={() => onChangePriority(id)}
          onChangeStatus={() => onChangeStatus(id)}
        />
      </li>
    );
  });
  return <ul className="list-group todo-list">{items} </ul>;
};

export default TodoList;
