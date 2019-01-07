import React, { Component } from 'react';

import Header from '../Header';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import TasksStatusFilter from '../TasksStatusFilter';
import TaskAddForm from '../TaskAddForm';

import './App.css';

export default class App extends Component {
  lastId = 10;

  state = {
    todoData: [
      { text: 'Learn React', priority: false, id: 1 },
      { text: 'Build onw apps', priority: true, id: 2 },
      { text: 'Deploy app to web', priority: false, id: 3 },
    ],
  };

  deleteTask = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const newList = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newList,
      };
    });
  };

  addTask = taskName => {
    const newTask = {
      text: taskName,
      priority: false,
      id: this.lastId++,
    };

    this.setState(({ todoData }) => {
      const newList = [...todoData, newTask];

      return {
        todoData: newList,
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <Header toDo={2} done={3} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <TasksStatusFilter />
        </div>

        <TodoList data={this.state.todoData} onDeleted={this.deleteTask} />

        <TaskAddForm onTaskAdded={this.addTask} />
      </div>
    );
  }
}
