import React, { Component } from 'react'
import { Container, Col, Row, Card } from "react-bootstrap";

export default class CommentCard extends Component {
    render() {
        const comment = this.props.comment;
        return (

            <Card style={{ width: '100%', padding: '10px' }}>
                <Container>
                    <Row >
                        <Col sm={2}>
                            <img src={comment.profile_picture}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: 300
                                }} ></img>
                        </Col>
                        <Col>
                            <Row>
                                <h6>{comment._userId}</h6>
                            </Row>
                            <Row>
                                <p>{comment.text}</p>
                            </Row>
                        </Col>
                    </Row>

                </Container>

            </Card>
        )
    }
}
