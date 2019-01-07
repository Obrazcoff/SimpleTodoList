import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div>
      <Header />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
