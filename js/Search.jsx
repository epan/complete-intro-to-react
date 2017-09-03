// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';

type State = { searchTerm: string };

class Search extends Component<Props, State> {
  state = {
    searchTerm: ''
  };
  props: {
    shows: Array<Show>
  };

  handleInput = (e: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>{this.state.searchTerm}</h1>
          <input type="text" placeholder="Search" onChange={this.handleInput} name="searchTerm" />
        </header>
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} show={show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
