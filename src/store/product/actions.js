import * as actions from './actionTypes';

//make function to add product
export const addProduct = (product = {}) => {
    return {
        type: actions.ADD_PRODUCT,
        payload: {
            name: product.name ? product.name : "unknown",
            price: product.price ? product.price : 0,
            quantity: product.quantity ? product.quantity : 0,
            hasDiscount: product.hasDiscount ? product.hasDiscount : false,
        }
    }
}

//make function to mark as discount
export const markAsDiscount = (id) => {
    return {
        type: actions.MARK_AS_DISCOUNT,
        payload: {
            id: id,
            // hasDiscount: false,
        }
    }
}

//make function to remove product
export const removeProduct = (id) => {
    return {
        type: actions.REMOVE_PRODUCT,
        payload: {
            id: id,
        }
    }
}
