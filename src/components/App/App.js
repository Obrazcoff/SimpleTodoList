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
      this.createTask('Learn React'),
      this.createTask('Build onw apps'),
      this.createTask('Deploy app to web'),
    ],
  };

  createTask(taskName) {
    return {
      text: taskName,
      priority: false,
      done: false,
      id: this.lastId++,
    };
  }

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
    const newTask = this.createTask(taskName);

    this.setState(({ todoData }) => {
      const newList = [...todoData, newTask];

      return {
        todoData: newList,
      };
    });
  };

  changeProperty(taskList, id, propName) {
    const idx = taskList.findIndex(el => el.id === id);
    const oldTask = taskList[idx];
    const newTask = { ...oldTask, [propName]: !oldTask[propName] };
    return [...taskList.slice(0, idx), newTask, ...taskList.slice(idx + 1)];
  }

  onChangePriority = id => {
    this.setState(({ todoData }) => {
      return { todoData: this.changeProperty(todoData, id, 'priority') };
    });
  };

  onChangeStatus = id => {
    this.setState(({ todoData }) => {
      return { todoData: this.changeProperty(todoData, id, 'done') };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneTasksCount = todoData.filter(item => item.done).length;
    const todoTasksCount = todoData.length - doneTasksCount;

    return (
      <div className="todo-app">
        <Header toDo={todoTasksCount} done={doneTasksCount} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <TasksStatusFilter />
        </div>

        <TodoList
          data={todoData}
          onDeleted={this.deleteTask}
          onChangePriority={this.onChangePriority}
          onChangeStatus={this.onChangeStatus}
        />

        <TaskAddForm onTaskAdded={this.addTask} />
      </div>
    );
  }
}
