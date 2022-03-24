import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
//ACTION TYPE
// const ADD_PRODUCT = "productAdded";
// const REMOVE_PRODUCT = "productRemoved";
// const ADD_QUANTITY = "addQuantity";
// const REMOVE_QUANTITY = "removeQuantity";
// const MARK_AS_DISCOUNT = "markAsDiscount";
// const REMOVE_MARK_AS_DISCOUNT = "removeMarkAsDiscount";

//ACTION CREATOR
// const addProduct = createAction(ADD_PRODUCT) 
// //make function to add product - when not using redux-toolkit
// export const addProduct = (product = {}) => {
//     return {
//         type: ADD_PRODUCT,
//         payload: {
//             name: product.name ? product.name : "unknown",
//             price: product.price ? product.price : 0,
//             quantity: product.quantity ? product.quantity : 0,
//             hasDiscount: product.hasDiscount ? product.hasDiscount : false,
//         }
//     }
// }

// //make function to mark as discount - when not using redux-toolkit
// export const markAsDiscount = (id) => {
//     return {
//         type: MARK_AS_DISCOUNT,
//         payload: {
//             id: id,
//             // hasDiscount: false,
//         }
//     }
// }

// //make function to remove product - when not using redux-toolkit
// export const removeProduct = (id) => {
//     return {
//         type: REMOVE_PRODUCT,
//         payload: {
//             id: id,
//         }
//     }
// }


//REDUCER
let lastId = 0;
const initialState = []

// export default createReducer(initialState, {
//     [ADD_PRODUCT]: (state, action) => {
//         const { name, price, quantity, hasDiscount } = action.payload;
//         state.push({
//             id: ++lastId,
//             name,
//             price,
//             quantity,
//             hasDiscount,
//         })
//     },
//     [MARK_AS_DISCOUNT]: (state, action) => {
//         const { id } = action.payload;
//         const product = state.find(product => product.id === id);
//         product.hasDiscount = true;
//     },
//     [REMOVE_MARK_AS_DISCOUNT]: (state, action) => {
//         const { id } = action.payload;
//         const product = state.find(product => product.id === id);
//         product.hasDiscount = false;
//     },
//     [REMOVE_PRODUCT]: (state, action) => {
//         const { id } = action.payload;
//         const index = state.findIndex(product => product.id === id);
//         state.splice(index, 1);
//     },
//     [ADD_QUANTITY]: (state, action) => {
//         const { id } = action.payload;
//         const product = state.find(product => product.id === id);
//         product.quantity++;
//     },
//     [REMOVE_QUANTITY]: (state, action) => {
//         const { id } = action.payload;
//         const product = state.find(product => product.id === id);
//         product.quantity--;
//     },
// })
    
//REDUCER - without using redux-toolkit
// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_PRODUCT:
//       return [
//           ...state,
//           {
//             id: ++lastId,
//             name: action.payload.name,
//             price: action.payload.price,
//             quantity: action.payload.quantity,
//             hasDiscount: action.payload.hasDiscount,
//           }
//       ];
//     case REMOVE_PRODUCT:
//       return state.filter(product => product.id !== action.payload.id);
//     case ADD_QUANTITY:
//       return state.map(product => {
//         if (product.id === action.payload.id) {
//           return {
//             ...product,
//             quantity: product.quantity + 1,
//           }
//         }
//         return product;
//       });
//     case REMOVE_QUANTITY:
//       return state.map(product => {
//         if (product.id === action.payload.id) {
//           return {
//             ...product,
//             quantity: product.quantity - 1,
//           }
//         }
//         return product;
//       });
//     case MARK_AS_DISCOUNT:
//       return state.map(product => {
//         if (product.id === action.payload.id) {
//           return {
//             ...product,
//             hasDiscount: true,
//           }
//         }
//         return product;
//       });
//     case REMOVE_MARK_AS_DISCOUNT:
//       return state.map(product => {
//         if (product.id === action.payload.id) {
//           return {
//             ...product,
//             hasDiscount: false,
//           }
//         }
//         return product;
//       });

//     default:
//       return state;
//   }
// }

//using redux-toolkit slice - if use this, no need code above
const slice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            const { name, price, quantity, hasDiscount } = action.payload;
            state.push({
                id: ++lastId,
                name,
                price,
                quantity,
                hasDiscount,
            })
        },
        markAsDiscount: (state, action) => {
            const { id } = action.payload;
            const product = state.find(product => product.id === id);
            product.hasDiscount = true;
        }
    }
})
export default slice.reducer;
export const { addProduct, markAsDiscount } = slice.actions;