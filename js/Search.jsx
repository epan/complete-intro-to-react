// @flow

import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  state = {
    searchTerm: ''
  };
  
  handleInput = (e: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>{this.state.searchTerm}</h1>
          <input
            type="text"
            placeholder="Search"
            onChange={this.handleInput}
            name="searchTerm"
          />
        </header>
        <div>
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} show={show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
