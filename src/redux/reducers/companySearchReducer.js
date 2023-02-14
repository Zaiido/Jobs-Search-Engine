import { GET_JOBS_PER_COMPANY, IS_ERROR_COMPANY, IS_LOADING_COMPANY } from "../actions";

const initialState = {
    companyResults: [],
    isLoading: true,
    isError: false
}

const companySearchReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_JOBS_PER_COMPANY:
            return {
                ...state,
                companyResults: action.payload
            }

        case IS_LOADING_COMPANY:
            return {
                ...state,
                isLoading: action.payload
            }
        case IS_ERROR_COMPANY:
            return {
                ...state,
                isError: action.payload
            }

        default:
            return state;
    }
}

export default companySearchReducer