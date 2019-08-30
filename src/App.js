import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import Feed from './components/Feed.js'
import { Provider } from 'react-redux'
import store from './store'
import ModalLogin from "./components/Login";
import LoadingSpiner from "./components/LoadingSpiner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Event from "./components/EventView";
import Profile from "./components/Profile";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: undefined,
      clubs: [],
      showLogin: false,
      isLoading: false
    }
  }

  handleClose = () => this.setState({ showLogin: false });
  handleShow = () => this.setState({ showLogin: true });
  handleLoading = () => this.setState({ isLoading: true });
  handleNotLoading = () => this.setState({ isLoading: false });

  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <NavBar handleShow={this.handleShow}
              handleLoading={this.handleLoading} />
            <ModalLogin handleClose={this.handleClose}
              handleClose={this.handleClose}
              showLogin={this.state.showLogin}></ModalLogin>
            <Feed handleNotLoading={this.handleNotLoading} />
            <LoadingSpiner isLoading={this.state.isLoading} ></LoadingSpiner>
            <Switch>
              <Route path='/event/:id' component={Event}></Route>
              <Route path='/profile' component={Profile}></Route>
            </Switch>
          </div>
        </Provider>
      </Router>

    );
  }
}

export default App;
