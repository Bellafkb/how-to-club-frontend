import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import Feed from './components/Feed.js'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  state = {
    clubs: []
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar/>
          <Feed/>
        </div>
      </Provider>
    );
  }
}

export default App;
