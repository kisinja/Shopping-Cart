import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [{
        id: 'sn1',
        title: 'DENGS Men Shoes',
        quantity: 2,
        price: 7000,
        img: "https://i.pinimg.com/564x/45/b1/3c/45b13c4a4095eca90b356213b0bccd00.jpg"
    }],
    totalQuantity: 2,
    totalAmount: 7000,
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