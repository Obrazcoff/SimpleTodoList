import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import TasksStatusFilter from './components/TasksStatusFilter';

import './index.css';

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

ReactDOM.render(<App />, document.getElementById('root'));
