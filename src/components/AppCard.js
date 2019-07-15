import React, { Component } from 'react'
import { Card, Button } from "react-bootstrap";

export default class AppCard extends Component {
    render() {

        return (
            <div>
                <Card >
                    <Card.Body>
                        <Card.Title>{this.props.club.name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
