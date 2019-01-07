import React from 'react';

const TasksStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-info">
        All
      </button>
      <button type="button" className="btn btn-outline-secondary">
        >Todo
      </button>
      <button type="button" className="btn btn-outline-secondary">
        >Done
      </button>
    </div>
  );
};

export default TasksStatusFilter;
