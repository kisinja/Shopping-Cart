import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import paymentReducer from './slices/paymentSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        payment: paymentReducer,
    },
});

export default store;