import React, { Component } from 'react';
import { Row } from 'react-bootstrap'
import AppCard from "../components/AppCard.js";
import { connect } from 'react-redux';
import Prototypes from 'prop-types'
import { searchClubs } from '../actions/clubActions';
import '../App.css';
import Pagination from './Pagination'

class Feed extends Component {

    render() {

        if (this.props.clubs.items !== undefined) {
            this.props.handleNotLoading();
            return (
                <div className="feed" style={{ marginTop: '20px' }}>
                    {
                        this.props.clubs.items.map((club, i) =>
                            <Row key={i}>
                                <AppCard profile={this.props.profile} key={club._id} club={club} />
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
