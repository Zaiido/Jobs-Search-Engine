import { configureStore, combineReducers } from "@reduxjs/toolkit";
import companySearchReducer from "../reducers/companySearchReducer";
import favouritesReducer from "../reducers/favouritesReducer";
import mainSearchResultsReducer from "../reducers/mainSearchResultsReducer";


const store = configureStore({
    reducer: combineReducers({
        favourites: favouritesReducer,
        results: mainSearchResultsReducer,
        companySearch: companySearchReducer
    })
})


export default store