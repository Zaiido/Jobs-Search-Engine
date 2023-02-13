import { GET_JOBS } from "../actions";

const initialState = {
    search: []
}

const mainSearchResultsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_JOBS:
            return {
                ...state,
                search: action.payload
            }

        default:
            return state;
    }

}

export default mainSearchResultsReducer

