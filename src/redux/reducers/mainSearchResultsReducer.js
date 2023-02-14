import { GET_JOBS, IS_ERROR, IS_LOADING } from "../actions";

const initialState = {
    mainResults: [],
    isLoading: false,
    isError: false
}

const mainSearchResultsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_JOBS:
            return {
                ...state,
                mainResults: action.payload
            }

        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case IS_ERROR:
            return {
                ...state,
                isError: action.payload
            }

        default:
            return state;
    }

}

export default mainSearchResultsReducer

