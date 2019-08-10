import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import Feed from './components/Feed.js'
import Autocomplete from 'react-google-autocomplete'
import axios from 'axios'
import config from './config'

class App extends Component {
  state = {
    clubs: []
  }

  handleSubmit = event => {
    if (this.state.place !== undefined) {
      event.preventDefault();
      let city = this.state.place.address_components[0].long_name;
      let lat = this.state.place.geometry.location.lat();
      let lng = this.state.place.geometry.location.lng();
      const request = {
        city,
        location: `${lat},${lng}`,
        types: 'night_club',
        radius: "5000"
      };
      axios.post(config.BASE_API_URL, request)
        .then(clubs => {
          this.setState({ clubs: clubs.data.clubs })
        })
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="form-container">

          <div className="input-group">
            <Autocomplete
              className="autocomplete"
              style={{ width: '80%' }}
              onPlaceSelected={(place) => {
                this.setState({
                  place
                })
              }}
              types={['(cities)']}
            />
            <div className="input-group-append">
              <button className="btn btn-secondary"
                type="button"
                onClick={this.handleSubmit}>
                search
              </button>
            </div>
          </div>
        </div>
        <Feed clubs={this.state.clubs} />
      </div >
    );
  }
}

export default App;
