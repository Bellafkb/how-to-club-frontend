import { FETCH_CLUBS, SEARCH_CLUBS } from '../actions/types'

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CLUBS:
            return {
                ...state,
                items: action.payload
            }
        case SEARCH_CLUBS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}