import React, { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie'
import { Container, Row } from 'react-bootstrap'
import AppCard from "../AppCard";
import "./style.css";


export default (props) => {
    const [profile, setProfile] = useState({});
    const [favorites, setFavorites] = useState([]);


    useEffect(async () => {
        const { data } = await Axios.get('http://localhost:4000/profile',
            { headers: { accessToken: Cookies.get('jwtToken') } });
        const favorites = await Axios.get(`http://localhost:4000/favorite/${data.profile._id}`,
            { headers: { accessToken: Cookies.get('jwtToken') } });
        //console.log(favorites.data.event);
        setProfile(data.profile);
        setFavorites(favorites.data.event);

    }, []);

    if (favorites.length > 0) {
        return (
            <Container className="favorite-container">
                {
                    favorites.map((f, i) => (
                        <Row key={i}>
                            {console.log(f)}
                            <AppCard profile={profile} club={f.eventId} ></AppCard>
                        </Row>
                    ))
                }
            </Container>
        )
    }

    return (
        <Container>
            {

            }
        </Container>
    )
}