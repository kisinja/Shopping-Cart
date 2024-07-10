import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    paymentDetails: null,
    paymentStatus: 'idle', // idle | processing | successful | failed
};

const paymentSlice = createSlice({
    name: 'payment',
    initialState,

    reducers: {
        processPayment(state, action) {
            state.paymentStatus = 'processing';
            state.paymentDetails = action.payload;
        },
        paymentSuccess(state) {
            state.paymentStatus = 'successful';
        },
        paymentFailure(state) {
            state.paymentStatus = 'failed';
        },
        resetPaymentStatus(state) {
            state.paymentStatus = 'idle';
            state.paymentDetails = null;
        },
    }
});

export const {
    processPayment,
    paymentSuccess,
    paymentFailure,
    resetPaymentStatus,
} = paymentSlice.actions;

export default paymentSlice.reducer;