import React, { Component } from 'react'
import { Card, Row, Col, Button } from "react-bootstrap";
import config from "../config";
import { Link } from "react-router-dom";
import moment from 'moment'
import FavoriteForm from './FavoriteForm';



export default class AppCard extends Component {
    render() {
        const event = this.props.club;
        let logoUrl = config.DEFAULT_LOGO;

        if (this.props.club.logo !== undefined && this.props.club.logo !== null) {
            logoUrl = this.props.club.logo.url
        }
        const limit = 86;
        let description = event.description.text
        if (description !== null) {
            if (description.length >= limit) {
                description = description.substring(0, limit) + '...';
            }
        }

        return (
            <Card style={{ width: '100%' }}>
                <Row >
                    <Col md={4}>
                        <Card.Img style={{
                            padding: '5px',
                            height: '100%',
                            width: '100%'
                        }} alt="" variant="top"
                            src={logoUrl} />
                    </Col>
                    <Col md={8} style={{ padding: 1 }}>
                        <Card.Body style={{ padding: '5px' }}>
                            <Row>
                                <Link to={`/event/${event.id}`}>
                                    <Card.Title>
                                        {this.props.club.name.text}</Card.Title>
                                </Link>
                            </Row>
                            <Row>
                                <Col md={8}>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        <li>
                                            <img alt='' src="https://img.icons8.com/ios-filled/50/000000/marker.png" style={{ width: '15px' }}></img> {this.props.club.venue.address.address_1 + ', ' + this.props.club.venue.address.city || 'None'}
                                        </li>
                                        <li>
                                            <img alt='' src="https://img.icons8.com/material-rounded/24/000000/clock.png" style={{ width: '15px' }} /> {moment(this.props.club.start.local).format('lll')}
                                        </li>
                                    </ul>
                                </Col>
                                <Col md={2}>
                                    <FavoriteForm profile={this.props.profile} event={this.props.club}></FavoriteForm>
                                </Col>

                            </Row>


                        </Card.Body>
                    </Col>
                </Row>
            </Card>

        )
    }
}
