import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import AppCard from "../components/AppCard.js";

class Feed extends Component {
    getStyle() {
        return {
            margin: '1em',
            borderRadius: '5px'
        }
    }
    render() {
        return (
            <div>
                <Row>
                    <Col style={this.getStyle()} sm="3">
                        <AppCard/>
                    </Col>
                    <Col style={this.getStyle()} sm="3">
                        <AppCard/>
                    </Col>
                    <Col style={this.getStyle()} sm="3">
                        <AppCard/>
                    </Col>
                    <Col style={this.getStyle()} sm="3">
                        <AppCard/>
                    </Col>
                    <Col style={this.getStyle()} sm="3">
                        <AppCard/>
                    </Col>
                    <Col style={this.getStyle()} sm="3">
                        <AppCard/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Feed;
