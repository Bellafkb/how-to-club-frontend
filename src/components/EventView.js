import React, { Component } from 'react'
import axios from 'axios'
import { Row, Card, Container } from "react-bootstrap";
import LoadingSpiner from "./LoadingSpiner";
import Description from "./Description";
import moment from 'moment'
import Comment from "./Comment";

export default class EventView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            event: ''
        }
    }
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    async componentDidMount() {
        try {
            let { data } = await axios.get(
                `http://localhost:4000/event/${this.props.match.params.id}`
            )
            console.log(data);
            this.setState({ event: data.data })
        } catch (error) {
            throw error;
        }
    }

    getTime() {
        return moment(this.state.event.start.local).format('lll')
    }

    render() {
        const event = this.state.event;
        if (event !== '') {
            this.getTime()

            return (
                <Container style={{ margin: 'auto' }}>
                    <Row style={{ marginTop: '20px', marginBottom: '1em' }}>
                        <Card style={{
                            width: '45%',
                            marginTop: '70px',
                            margin: 'auto'
                        }}>
                            {event.logo ? (<Card.Img variant="top" src={event.logo.original.url} />) :
                                (<div></div>)
                            }
                            <Card.Body>
                                <Card.Title>{event.name.text}</Card.Title>

                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li>
                                        <img alt="" src="https://img.icons8.com/material-rounded/24/000000/clock.png" style={{ width: '15px' }} /> {this.getTime()}
                                    </li>
                                    <li>
                                        <img alt="" src="https://img.icons8.com/ios-filled/50/000000/marker.png" style={{ width: '15px' }} /> {event.venue.address.address_1}
                                    </li>
                                </ul>

                            </Card.Body>
                        </Card>
                    </Row>
                    <Row style={{ marginBottom: '1em' }}>
                        <Description text={event.description.text}></Description>
                    </Row >
                    <Row>
                        <Comment profile={this.props.profile} event={event}></Comment>
                    </Row>
                </Container>
            )
        } else {
            return (
                <LoadingSpiner></LoadingSpiner>
            )
        }
    }
}
