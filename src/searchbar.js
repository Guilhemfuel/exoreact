import React, { Component } from 'react';

class Searchbar extends React.Component {
  render() {
    return (
      <p>
        Search image : <input onChange={e => this.props.onChange(e)} type="text" name="searchbar" />
      </p>
    )
  }
}

export default Searchbar;
