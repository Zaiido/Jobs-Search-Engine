import { GET_JOBS } from "../actions";

const initialState = {
    mainResults: []
}

const mainSearchResultsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_JOBS:
            return {
                ...state,
                mainResults: action.payload
            }

        default:
            return state;
    }

}

export default mainSearchResultsReducer

