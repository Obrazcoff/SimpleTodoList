import React, { Component } from 'react';

import './TaskAddForm.css';

export default class TaskAddForm extends Component {
  state = {
    newTaskText: '',
  };

  onTextChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onTaskAdded(this.state.text);
  };

  render() {
    return (
      <form className="task-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onTextChange}
          placeholder="What to do next?"
        />
        <button className="btn btn-outline-secondary">Add task</button>
      </form>
    );
  }
}
