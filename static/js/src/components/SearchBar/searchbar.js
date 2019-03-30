import React, {Component} from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Search..."/>
        </div>
      </div>
    )
  }
}

export default SearchBar;
