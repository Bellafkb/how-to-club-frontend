import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import Feed from './components/Feed.js'
import { Provider } from 'react-redux'
import store from './store'
import AppForm from './components/AppForm'

class App extends Component {
  state = {
    clubs: []
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <AppForm></AppForm>
          <Feed />
        </div>
      </Provider>
    );
  }
}

export default App;
