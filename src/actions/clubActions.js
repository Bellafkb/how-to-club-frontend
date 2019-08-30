import { SEARCH_CLUBS } from "./types";
import axios from 'axios';
import config from '../config';

export const searchClubs = req => dispatch => {
    axios.post(config.BASE_API_URL, req)
        .then(({ data }) => {
            dispatch({
                type: SEARCH_CLUBS,
                payload: data
            })
        }).catch(err => {
            throw err;
        })
}  