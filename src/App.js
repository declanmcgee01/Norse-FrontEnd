import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <h1 id = "Home-Page-Header">
            Norse Gods 
          </h1> 
          <body>
            <input type="text" placeholder="Search Gods.." name="search" id = "Search-Bar"></input>
          </body>
        </header>
        <body>
        </body>
      </div>
    );
  }
}

export default App;
