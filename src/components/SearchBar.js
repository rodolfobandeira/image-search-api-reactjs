import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' }

  /*
  constructor(props) {
    super(props); // Required when referencing "this"

    // We could avoid all this logic here if we make "onFormSubmit" an arrow function!
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  */

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onAppSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search:</label>

            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
             />
          </div>
        </form>
      </div>
    )
  };
};

export default SearchBar;
