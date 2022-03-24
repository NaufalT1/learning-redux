import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = {
    list:[]
}

const slice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push({
                id: ++lastId,
                name: action.payload.name,
                price: action.payload.price ? action.payload.price : 0,
                quantity: action.payload.quantity ? action.payload.quantity : 0,
                hasDiscount: action.payload.hasDiscount ? action.payload.hasDiscount : false,
            })
        },
        markAsDiscount: (state, action) => {
            const  id  = action.payload;
            const product = state.find(product => product.id === id);
            product.hasDiscount = true;
        },
        removeProduct: (state, action) => {
            const  id  = action.payload;
            const product = state.find(product => product.id === id);
            state.splice(state.indexOf(product), 1);
        }
    }
})
export default slice.reducer;
export const { addProduct, markAsDiscount, removeProduct } = slice.actions;