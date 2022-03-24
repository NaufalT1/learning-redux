import axios from "axios";
import { apiProductsRequestSucceeded } from '../product';

const api = store => next => async action => {

    if(action.type !== "apiRequest") return next(action);

    next(action);
    // Prosses

    const { url, method, data, onSuccess, onError } = action.payload;
    const response = await axios.request({
        baseURL: 'http://localhost:9001/api',
        url,
        method,
        data
    });

    // console.log('response', response)
    store.dispatch(apiProductsRequestSucceeded(response.data));

}

export default api;
