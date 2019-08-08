import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import Feed from './components/Feed.js'
import { Form, Button } from 'react-bootstrap'
import Autocomplete from 'react-google-autocomplete'
import axios from 'axios'

class App extends Component {
  state = {
    clubs: []
  }

  handleSubmit = event => {
    if(this.state.city){
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
    axios.post(`http://localhost:4000/club`, request)
      .then(clubs => {
        this.setState({clubs : clubs.data.clubs})
      })
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div class="form-container" >
          <Form inline >
            <Autocomplete
              className="autocomplete"
              style={{ width: '90%' }}
              onPlaceSelected={(place) => {
                this.setState({
                  place
                })
              }}
              types={['(cities)']}
              componentRestrictions={{ country: "de" }}
            />
            <Button type="button" style={{ width: '10%' }} variant="outline-info" onClick={this.handleSubmit}>
              search
              </Button>
          </Form>
        </div>
        <Feed clubs={this.state.clubs} />
      </div>
    );
  }
}

export default App;
