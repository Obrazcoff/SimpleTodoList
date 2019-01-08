import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
  render() {
    const {
      text,
      onDeleted,
      onChangePriority,
      onChangeStatus,
      done,
      priority,
    } = this.props;

    let classNames = 'todo-list-item';

    if (done) classNames += ' done';

    if (priority) classNames += ' priority';

    return (
      <span className={classNames}>
        <span className="todo-list-item-text" onClick={onChangeStatus}>
          {text}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onChangePriority}
        >
          <i className="fa fa-exclamation" />
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
