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
import io from "socket.io-client";
import Favorites from './components/Favorites'
import Axios from 'axios';
import Cookies from 'js-cookie'

const url = 'http://localhost:4000';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: undefined,
      clubs: [],
      showLogin: false,
      isLoading: false,
      socket: null,
      profile:''
    }
  }
  async componentWillMount() {
    try {
      this.initSocket()
      const {data} = await Axios.get(url+ '/profile', {headers : {accessToken: Cookies.get('jwtToken')}})

      this.setState({profile : data.profile})
    } catch (error) {
      throw (error);
    }

  }

  initSocket() {
    const socket = io(url);
    socket.on('connect', () => {
      console.log('connected', socket);
    })
    this.setState({ socket })
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
            <Switch>
              <Route path='/event/:id' component={(routerProps) => <Event {...routerProps} profile={this.state.profile}></Event>}></Route>
              <Route path='/profile' component={Profile}></Route>
              <Route path='/favorites' component={Favorites}></Route>
              <Route path='/' render={() =>
                <Feed profile={this.state.profile} handleNotLoading={this.handleNotLoading} />} >
              </Route>
            </Switch>
            <ModalLogin handleClose={this.handleClose}
              showLogin={this.state.showLogin}></ModalLogin>
            <LoadingSpiner isLoading={this.state.isLoading} ></LoadingSpiner>
          </div>
        </Provider>
      </Router>

    );
  }
}

export default App;


//<NavBar handleShow={this.handleShow}
  //            handleLoading={this.handleLoading} />