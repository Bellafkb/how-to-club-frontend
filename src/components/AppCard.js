import React, { Component } from 'react'
import { Card} from "react-bootstrap";

export default class AppCard extends Component {
    render() {

        return (

                <Card style={{width:'100%'}}>
                    <Card.Body>
                        <Card.Title>{this.props.club.name}</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        </Card.Text>
                    </Card.Body>
                </Card>

        )
    }
}
