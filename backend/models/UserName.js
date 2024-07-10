const mongoose = require('mongoose');

const UserNameSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        default: 'https://via.placeholder.com/150'
    },
}, { timestamps: true });

const UserName = mongoose.model('UserName', UserNameSchema);

module.exports = UserName;