const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    cardNumber: {
        type: String,
        required: true,
    },
    expirationDate: {
        type: String,
        required: true,
    },
    cvv: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['processing', 'successful', 'failed'],
        default: 'processing',
    }
}, { timestamps: true });

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;