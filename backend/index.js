const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { connectDb } = require('./db');
const UserName = require('./models/UserName');

const app = express();
const port = 3000;

app.use(morgan('common'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const paymentsRouter = require('./routes/payments');

app.use('/api/payments', paymentsRouter);

app.get('/api/users', (req, res) => {
    res.json({ message: 'Hello, User! Submit your github username to start :)' });
});

app.post('/api/users', async (req, res) => {

    const { username } = req.body;
    if (!username) {
        return res.json({ message: 'Please enter a username', success: false }).status(400);
    }

    try {
        const user = new UserName(req.body);
        await user.save();

        if (!user) return res.json({ message: 'Could not create user' }).status(400);

        res.json({ message: "User created successfully" }).status(201);
    } catch (error) {
        console.error('Could not create user', error.message);
        res.json({ error: error.message }).status(500);
    }
});

const start = async () => {
    try {
        await connectDb();
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Could not start server', error.message);
    }
};

start();