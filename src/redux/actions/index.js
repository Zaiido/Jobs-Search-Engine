export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_PER_COMPANY = "GET_JOBS_PER_COMPANY"
export const IS_LOADING = "IS_LOADING";
export const IS_ERROR = "IS_ERROR";
export const IS_LOADING_COMPANY = "IS_LOADING_COMPANY";
export const IS_ERROR_COMPANY = "IS_ERROR_COMPANY"


export const addToFavouritesAction = (company_name) => {
    return {
        type: ADD_TO_FAVOURITES,
        payload: company_name
    }
}

export const removeFromFavouritesAction = (company_name) => {
    return {
        type: REMOVE_FROM_FAVOURITES,
        payload: company_name
    }
}


export const mainSearchResultsAction = (query) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + '&limit=20')
            dispatch({
                type: IS_LOADING,
                payload: true
            })
            if (response.ok) {
                const { data } = await response.json()
                dispatch({
                    type: GET_JOBS,
                    payload: data
                })
                dispatch({
                    type: IS_LOADING,
                    payload: false
                })
            } else {
                dispatch({
                    type: IS_LOADING,
                    payload: false
                })
                dispatch({
                    type: IS_ERROR,
                    payload: true
                })
            }
        } catch (error) {
            dispatch({
                type: IS_LOADING,
                payload: false
            })
            dispatch({
                type: IS_ERROR,
                payload: true
            })
        }
    }
}


export const companySearchResultsAction = (companyName) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?company=" + companyName)
            if (response.ok) {
                const { data } = await response.json()
                dispatch({
                    type: GET_JOBS_PER_COMPANY,
                    payload: data
                })
                dispatch({
                    type: IS_LOADING_COMPANY,
                    payload: false
                })
            } else {
                dispatch({
                    type: IS_LOADING_COMPANY,
                    payload: false
                })
                dispatch({
                    type: IS_ERROR_COMPANY,
                    payload: true
                })
            }
        } catch (error) {
            dispatch({
                type: IS_LOADING_COMPANY,
                payload: false
            })
            dispatch({
                type: IS_ERROR_COMPANY,
                payload: true
            })
        }
    }
}
