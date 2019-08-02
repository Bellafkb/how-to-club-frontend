import React, { Component } from 'react';
import { Row } from 'react-bootstrap'
import AppCard from "../components/AppCard.js";
import '../App.css';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        console.log(this.props.clubs)
        return (
            <div className="feed">
                {this.props.clubs.map(club =>
                    <Row>
                        <AppCard key={club.id} club={club} />
                    </Row>)}
            </div>
        );
    }
}

export default Feed;
