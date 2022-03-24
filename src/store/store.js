import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
// import reducer from "./product/reducer";
import reducer from "./product";

//create store
const store = createStore(
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    devToolsEnhancer({trace: true})
    );

export default store;