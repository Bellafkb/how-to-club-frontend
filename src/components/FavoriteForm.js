import React, { useContext, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Axios from 'axios'
import Cookies from 'js-cookie'

export default (props) => {

    const favoriteHandler = async () => {

        try {
            console.log(props.profile);
            const response = await Axios.post('http://localhost:4000/favorite',
                {
                    eventId: props.event._id,
                    userId: props.profile._id
                }, { headers: { accessToken: Cookies.get('jwtToken') } }
            )
        } catch (error) {
            throw error;
        }
    }

    return (
        <Button onClick={() => favoriteHandler()}>Like</Button>
    )
}
