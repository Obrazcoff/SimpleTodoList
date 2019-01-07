import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
  state = {
    done: false,
    priority: false,
  };

  onTextClick = () => {
    this.setState(({ done }) => {
      return { done: !done };
    });
  };

  onMarkPriority = () => {
    this.setState(({ priority }) => {
      return { priority: !priority };
    });
  };

  render() {
    const { text, onDeleted } = this.props;
    const { done, priority } = this.state;

    let classNames = 'todo-list-item';

    if (done) classNames += ' done';

    if (priority) classNames += ' priority';

    return (
      <span className={classNames}>
        <span className="todo-list-item-text" onClick={this.onTextClick}>
          {text}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkPriority}
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
