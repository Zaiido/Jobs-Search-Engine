import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions";

const initialState = {
    companies: []
}

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                companies: [...state.companies, action.payload]
            }

        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                companies: state.companies.filter((company) => company !== action.payload)
            }


        default:
            return state;
    }

}

export default favouritesReducer