import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import reducer from "./product/reducer";
import reducer from "./rootReducer";
import logger from "./middleware/logger";
import api from "./middleware/api";

//create store
// const store = createStore(
//     reducer,
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     devToolsEnhancer({trace: true})
//     );

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, api)
});


export default store;