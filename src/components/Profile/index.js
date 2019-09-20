import React, { useContext, useState, useEffect } from 'react';
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap';
import config from "../../config";
import axios from 'axios'
import Cookies from "js-cookie";


export default (props) => {
    const [profile, setProfile] = useState(undefined)

    useEffect(async () => {
        const { data } = await axios.get('http://localhost:4000/profile',
            { headers: { accessToken: Cookies.get('jwtToken') } });
        setProfile(data.profile);

    }, []);

    if (profile !== undefined) {
        return (
            <Container style={{ width: '40%' }}>
                <Card >
                    <Row>
                        <Col md={2} >
                            <Image src={profile.profile_picture} style={{
                                borderRadius: 50,
                                width: 100,
                                height: 100,
                                padding: 10
                            }}></Image>
                        </Col>
                        <Col md={10} style={{
                            padding: 10,
                            paddingLeft: 40
                        }}>
                            <h3>{profile.username}<Button style={{marginLeft:20}}>edit</Button></h3>
                            
                        </Col>
                    </Row>
                </Card>
            </Container>
        )
    } else {
        return (<h1>
            authenticate yourself sir!!
        </h1>)
    }

}
