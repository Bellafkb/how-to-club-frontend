import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import AppCard from "../components/AppCard.js";
import '../App.css';

class Feed extends Component {
    render() {
        return (
            <div className="feed">
                <Row>
                        <AppCard/>
                </Row>
                <Row>
                        <AppCard/>
                </Row>
                <Row>
                        <AppCard/>
                </Row>
                <Row>
                        <AppCard/>
                </Row>
                <Row>
                        <AppCard/>
                </Row>

                
            </div>
        );
    }
}

export default Feed;
