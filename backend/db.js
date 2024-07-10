const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/GITHUB-USERNAMES')
            .then(() => console.log('Connected to MongoDB'))
            .catch(err => console.error('Could not connect to MongoDB', err));
    } catch (error) {
        console.error('Could not connect to MongoDB', error.message);
    }
};

module.exports = { connectDb };