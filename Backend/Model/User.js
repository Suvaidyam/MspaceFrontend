const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType:{
        type:String,
        enum:["ADMIN", "COMPANY_ADMIN","EMPLOYEE"],
        default:"COMPANY_ADMIN"
    },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, // Reference of Company schema
});

const User = mongoose.model('user', userSchema)

module.exports = User