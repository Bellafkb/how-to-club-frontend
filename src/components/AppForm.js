import React, { Component } from 'react';
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
            <div className="form-container" >
                <div className="input-group">
                    <Autocomplete
                        className="autocomplete"

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
                            style={{
                                background: "#495057",
                                borderColor: '#6441a4'
                            }}>

                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd" clipRule="evenodd">
                                <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" /></svg>
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