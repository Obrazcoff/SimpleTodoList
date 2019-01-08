import React, { Component } from 'react';

export default class TasksStatusFilter extends Component {
  buttons = [
    { filterValue: 'all', btnLabel: 'All' },
    { filterValue: 'todo', btnLabel: 'Todo' },
    { filterValue: 'done', btnLabel: 'Done' },
  ];

  render() {
    const { filter, onChangeFilter } = this.props;

    const buttons = this.buttons.map(({ filterValue, btnLabel }) => {
      const isActiveFilter = filter === filterValue;
      const filterClass = isActiveFilter ? 'btn-info' : 'btn-outline-secondary';

      return (
        <button
          type="button"
          className={`btn ${filterClass}`}
          key={filterValue}
          onClick={() => onChangeFilter(filterValue)}
        >
          {btnLabel}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
