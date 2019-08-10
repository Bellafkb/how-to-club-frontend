import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import Autocomplete from 'react-google-autocomplete'
import { connect } from 'react-redux';
import { searchClubs } from '../actions/clubActions';
import Prototypes from 'prop-types'


class AppForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            place: undefined
        }
    }

    onHandleSubmit = event => {
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
            this.props.searchClubs(request)
        }
    }

    render() {
        return (
            <div class="form-container" >
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
                            onClick={this.onHandleSubmit}
                            style={{width : '100%'}}>
                            search
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

AppForm.Prototypes = {
    searchClubs: Prototypes.func.isRequired
}

const mapStateToProps = state => ({
    clubs: state.clubs.items
});

export default connect(mapStateToProps, { searchClubs })(AppForm);