import React, { Component } from 'react';
import { Row } from 'react-bootstrap'
import AppCard from "../components/AppCard.js";
import { connect } from 'react-redux';
import Prototypes from 'prop-types'
import { searchClubs } from '../actions/clubActions';
import '../App.css';

class Feed extends Component {

    render() {

        if (this.props.clubs.items !== undefined) {
            this.props.handleNotLoading();
            return (
                <div className="feed">
                    {
                        this.props.clubs.items.map(club =>
                            <Row>
                                <AppCard key={club._id} club={club} />
                            </Row>)}
                </div>
            );
        } else {
            return (<div></div>);
        }

    }
}

Feed.prototypes = {
    clubs: Prototypes.array.isRequired,
    searchClubs: Prototypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        clubs: state.clubs
    }
};

export default connect(mapStateToProps, { searchClubs })(Feed);
