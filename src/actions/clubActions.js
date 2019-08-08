import { FETCH_CLUBS, SEARCH_CLUBS } from "./types";
import axios from 'axios';


export const fetchClubs = request => async (dispatch) => {
    const resp = await axios.post('http://localhost:4000/club', request);
    await dispatch({
        type: FETCH_CLUBS,
        payload: resp
    })
}

export const testFunction = () => (dispatch) => {
    dispatch({
        type: FETCH_CLUBS,
        payload: "bla bla"
    })
}

export const searchClubs = req => dispatch => {
        axios.post(`http://localhost:4000/club`, req)
            .then(({data}) => {
                dispatch({
                    type: SEARCH_CLUBS,
                    payload: data.clubs
                })
            })
}  