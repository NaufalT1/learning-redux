import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = []

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