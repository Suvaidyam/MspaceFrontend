const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    companyId: {
        type: String,
        required: true
    },
    createMeeting:{
        type:[
            { }
        ]
    }

});

const Company = mongoose.model('Company', CompanySchema)

module.exports = Company