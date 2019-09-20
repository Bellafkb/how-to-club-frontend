import React, { Component } from 'react'
import { Card } from "react-bootstrap";

export default class Description extends Component {
    render() {
        return (
            <Card style={{ width: '45%', marginTop: '70px', margin: 'auto' }}>
                <Card.Body>
                    <Card.Title>Description</Card.Title>
                    <Card.Text>
                        {this.props.text}
                    </Card.Text>

                </Card.Body>
            </Card>
        )
    }
}
