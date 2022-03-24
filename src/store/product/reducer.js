import * as actions from './actionType';
let lastId = 0;
const initialState = [

]

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_PRODUCT:
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
    case actions.REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.payload.id);
    case actions.ADD_QUANTITY:
      return state.map(product => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }
        return product;
      });
    case actions.REMOVE_QUANTITY:
      return state.map(product => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          }
        }
        return product;
      });
    case actions.MARK_AS_DISCOUNT:
      return state.map(product => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            hasDiscount: true,
          }
        }
        return product;
      });
    case actions.REMOVE_MARK_AS_DISCOUNT:
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