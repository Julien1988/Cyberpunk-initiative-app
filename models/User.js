const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please add name'],
        maxlength: [40, 'Name cannot be more than 40 characters']
    },
    email: {
        type: String,
        require: [true, 'Please add email'],
        maxlength: [280, 'Name cannot be more than 280 characters']
    },
    password: {
        type: String,
        require: [true, 'Please add password']
    }
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);