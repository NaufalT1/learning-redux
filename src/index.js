import store from "./store/store";
// import * as action from "./store/product/actionTypes";
import { addProduct, markAsDiscount, removeProduct } from "./store/product";
import { addProductToCart, removeProductFromCart } from "./store/cart";


store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch(addProduct({
    name: "iPhone X",
    price: 1000,}));

store.dispatch(addProduct({
    name: "iPhone XS",
    price: 1000,}));


store.dispatch(addProduct({
    name: "iPhone XS Max",
    price: 1000,}));
    
store.dispatch(removeProduct(1));
store.dispatch(markAsDiscount(2));

store.dispatch(addProductToCart(1, 2));


// console.log(store.getState());