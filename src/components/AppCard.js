import React, { Component } from 'react'
import { Card } from "react-bootstrap";


export default class AppCard extends Component {
    render() {

        return (
            <Card style={{ width: '100%' , background : '#c2c2c2'}}>
                <Card.Img variant="top"
                    src="https://images.unsplash.com/photo-1532452119098-a3650b3c46d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
                <Card.Body>
                    <Card.Title>{this.props.club.name}</Card.Title>
                    <Card.Text>
                        <small className="text">{this.props.club.vicinity}</small>
                    </Card.Text>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
              </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

        )
    }
}
