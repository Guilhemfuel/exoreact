import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './searchbar';
import Images from './images';

class App extends Component {

  state = {}

  searchImage = event => {
    var searchName = event.target.value;
    console.log(searchName);
    this.setState({name:searchName});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Searchbar onChange={this.searchImage}/>
        <Images searchName={this.state.name}/>
      </div>
    );
  }
}

export default App;
