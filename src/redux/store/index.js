import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import mainSearchResultsReducer from "../reducers/mainSearchResultsReducer";


const store = configureStore({
    reducer: combineReducers({
        favourites: favouritesReducer,
        results: mainSearchResultsReducer
    })
})


export default store