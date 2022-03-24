import { createSlice } from "@reduxjs/toolkit";

const lastId = 0;
const initialState = []

const slice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const { productId, quantity } = action.payload;
            const product = state.find(product => product.id === productId);
            if (product) {
                product.quantity += quantity;
            } else {
                state.push({
                    id: ++lastId,
                    productId,
                    quantity,
                })
            }
        },
        removeProductFromCart: (state, action) => {
            const productId = action.payload;
            const product = state.find(product => product.id === productId);
            if (product) {
                state.splice(state.indexOf(product), 1);
            }
        }
    }
})
export default slice.reducer;
export const { addProductToCart, removeProductFromCart } = slice.actions;