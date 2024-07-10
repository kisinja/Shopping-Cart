import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { processPayment, paymentSuccess, paymentFailure } from './slices/paymentSlice';

const PaymentForm = () => {

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [amount, setAmount] = useState('');
    const dispatch = useDispatch();

    const paymentStatus = useSelector(state => state.payment.paymentStatus);

    const submitHandler = async (event) => {
        event.preventDefault();

        // Simulate payment processing
        dispatch(processPayment({ cardNumber, expiryDate, cvv, amount }));

        try {
            const response = await fetch('http://localhost:3000/api/payments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cardNumber, expiryDate, cvv, amount }),
            });

            if (response.ok) {
                dispatch(paymentSuccess());
            } else {
                const data = await response.json();
                dispatch(paymentFailure());
                alert(data.message);
            }
        } catch (error) {
            dispatch(paymentFailure());
            alert('Payment failed. Please try again.');
        }
    };

    return (
        <div className='payment-container'>
            <h1 style={{ textDecoration: "underline" }}>Payment Form</h1>
            {paymentStatus === 'processing' && <p className='payment-status'>Processing your payment...</p>}
            {paymentStatus === 'successful' && <p className='payment-status'>Payment successful!</p>}
            {paymentStatus === 'failed' && <p className='payment-status'>Payment failed. Please try again.</p>}
            {paymentStatus === 'idle' && (
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Card Number:</label>
                        <input
                            type="text"
                            placeholder='1234 5678 1234 5678'
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Expiry Date:</label>
                        <input
                            type="text"
                            placeholder='MM/YY'
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>CVV:</label>
                        <input
                            type="number"
                            placeholder='123'
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Amount:</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Pay Now</button>
                </form>
            )}
        </div>
    );
};

export default PaymentForm;