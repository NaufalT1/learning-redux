const ADD_PRODUCT = "productAdded";
const REMOVE_PRODUCT = "productRemoved";
const ADD_QUANTITY = "addQuantity";
const REMOVE_QUANTITY = "removeQuantity";
const MARK_AS_DISCOUNT = "markAsDiscount";
const REMOVE_MARK_AS_DISCOUNT = "removeMarkAsDiscount";

//make function to add product
export const addProduct = (product = {}) => {
    return {
        type: ADD_PRODUCT,
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
        type: MARK_AS_DISCOUNT,
        payload: {
            id: id,
            // hasDiscount: false,
        }
    }
}

//make function to remove product
export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        payload: {
            id: id,
        }
    }
}

let lastId = 0;
const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
          ...state,
          {
            id: ++lastId,
            name: action.payload.name,
            price: action.payload.price,
            quantity: action.payload.quantity,
            hasDiscount: action.payload.hasDiscount,
          }
      ];
    case REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.payload.id);
    case ADD_QUANTITY:
      return state.map(product => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }
        return product;
      });
    case REMOVE_QUANTITY:
      return state.map(product => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          }
        }
        return product;
      });
    case MARK_AS_DISCOUNT:
      return state.map(product => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            hasDiscount: true,
          }
        }
        return product;
      });
    case REMOVE_MARK_AS_DISCOUNT:
      return state.map(product => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            hasDiscount: false,
          }
        }
        return product;
      });

    default:
      return state;
  }
}