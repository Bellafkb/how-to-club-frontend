import React, { Component } from 'react'
import { Card, Row, Col } from "react-bootstrap";
import config from "../config";
import { Link } from "react-router-dom";

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
                            <Link to={`/event/${event.id}`}>
                                <Card.Title><a style={{
                                    textDecoration: 'none',
                                    fontSize: '16px'
                                }}>{this.props.club.name.text}</a></Card.Title>
                            </Link>
                            <Card.Subtitle style={{ fontSize: "14px" }}
                                class="text-muted">{this.props.club.venue.address.address_1 || 'None'}</Card.Subtitle>
                            <p>{this.props.club.start.local}</p>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

        )
    }
}
