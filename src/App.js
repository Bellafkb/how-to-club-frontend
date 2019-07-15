import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import AppForm from './components/AppForm.js'
import Feed from './components/Feed.js'



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AppForm/>
        <Feed/>
      </div>
    );
  }
}

export default App;
