const mongoose = require('mongoose');

const PunkSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please add name'],
        maxlength: [40, 'Name cannot be more than 40 characters']
    },
    initiative: {
        type: Number,
        require: [true, 'Please add initiative'],
    },
    is_player: {
        type: Boolean,
    },
    user_id: {
        type: String,
        require: [true, 'Please connect to your account'],
    }

})


export default mongoose.models.Punk || mongoose.model('Punk', PunkSchema)