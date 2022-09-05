import React from "react";
import { combineReducers , createStore} from "redux";
import newsReducer from "./news-reducer";



let reducers = combineReducers({
    newsPage: newsReducer
});

let store = createStore (reducers);
window.store = store;

export default store;