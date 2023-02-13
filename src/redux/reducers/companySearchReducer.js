import { GET_JOBS_PER_COMPANY } from "../actions";

const initialState = {
    companyResults: []
}

const companySearchReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_JOBS_PER_COMPANY:
            return {
                ...state,
                companyResults: action.payload
            }

        default:
            return state;
    }
}

export default companySearchReducer