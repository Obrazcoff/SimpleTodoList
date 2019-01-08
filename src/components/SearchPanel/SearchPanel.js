import React, { Component } from 'react';

import './SearchPanel.css';

export default class SearchPanel extends Component {
  state = {
    searchString: '',
  };

  onChangeSearchString = e => {
    const searchString = e.target.value;
    this.setState({ searchString });
    this.props.onChangeSearchString(searchString);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Type here to search..."
        value={this.state.searchString}
        onChange={this.onChangeSearchString}
      />
    );
  }
}
