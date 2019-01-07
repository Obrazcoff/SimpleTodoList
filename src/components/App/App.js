import React from 'react';

import Header from '../Header';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import TasksStatusFilter from '../TasksStatusFilter';

import './App.css';

const App = () => {
  const todoData = [
    { text: 'Learn React', priority: false, id: 1 },
    { text: 'Build onw apps', priority: true, id: 2 },
    { text: 'Deploy app to web', priority: false, id: 3 },
  ];

  return (
    <div className="todo-app">
      <Header toDo={2} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <TasksStatusFilter />
      </div>
      <TodoList data={todoData} />
    </div>
  );
};

export default App;
