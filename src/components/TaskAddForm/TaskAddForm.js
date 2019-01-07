import React, { Component } from 'react';

import './TaskAddForm.css';

export default class TaskAddForm extends Component {
  state = {};
  render() {
    return (
      <div className="task-add-form">
        <button
          className="btn btn-outline-secondary"
          onClick={() => this.props.onTaskAdded('new task')}
        >
          Add task
        </button>
      </div>
    );
  }
}
