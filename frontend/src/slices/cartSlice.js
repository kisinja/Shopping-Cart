import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [{
        id: 'p1',
        title: 'Red Shirt',
        quantity: 1,
        price: 45,
        img: "https://i.pinimg.com/474x/85/4a/10/854a10e981fce8ddaa8779b646c4c5f2.jpg"
    }],
    totalQuantity: 1,
    totalAmount: 45,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
                state.totalAmount += newItem.price;
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
                state.totalAmount += newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
                state.totalAmount -= existingItem.price;
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
                state.totalAmount -= existingItem.price;
            }
        },
    },
});

export const {
    addItemToCart,
    removeItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;