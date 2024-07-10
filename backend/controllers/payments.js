const Payment = require('../models/Payment');

const createPayment = async (req, res) => {
    const { cardNumber, expiryDate, cvv, amount } = req.body;

    try {
        const payment = new Payment({
            cardNumber,
            expiryDate,
            cvv,
            amount,
            status: 'processing'
        });

        await payment.save();
        setTimeout(async () => {
            const isSuccess = Math.random() > 0.5; // Randomly decide success or failure
            if (isSuccess) {
                payment.status = 'successful';
                await payment.save();
                res.status(200).json({ message: 'Payment successful!' });
            } else {
                payment.status = 'failed';
                await payment.save();
                res.status(400).json({ message: 'Payment failed. Please try again.' });
            }
        }, 2000);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error.message);
    }
};

module.exports = { createPayment };