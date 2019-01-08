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
      this.createTask('Build own apps'),
      this.createTask('Deploy app to web'),
    ],
    searchString: '',
    filter: 'all',
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

  search(tasksList, searchString) {
    if (searchString.length === 0) {
      return tasksList;
    }
    return tasksList.filter(task => {
      return task.text.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
    });
  }

  onChangeSearchString = searchString => {
    this.setState({ searchString });
  };

  filter(tasksList, filter) {
    switch (filter) {
      case 'all':
        return tasksList;

      case 'todo':
        return tasksList.filter(task => !task.done);

      case 'done':
        return tasksList.filter(task => task.done);

      default:
        return tasksList;
    }
  }

  onChangeFilter = filter => {
    this.setState({ filter });
  };

  render() {
    const { todoData, searchString, filter } = this.state;
    const visibleTasks = this.filter(
      this.search(todoData, searchString),
      filter,
    );
    const doneTasksCount = todoData.filter(item => item.done).length;
    const todoTasksCount = todoData.length - doneTasksCount;

    return (
      <div className="todo-app">
        <Header toDo={todoTasksCount} done={doneTasksCount} />

        <div className="top-panel d-flex">
          <SearchPanel onChangeSearchString={this.onChangeSearchString} />
          <TasksStatusFilter
            filter={filter}
            onChangeFilter={this.onChangeFilter}
          />
        </div>

        <TodoList
          data={visibleTasks}
          onDeleted={this.deleteTask}
          onChangePriority={this.onChangePriority}
          onChangeStatus={this.onChangeStatus}
        />

        <TaskAddForm onTaskAdded={this.addTask} />
      </div>
    );
  }
}
