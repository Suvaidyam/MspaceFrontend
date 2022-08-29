const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    code: {
        type: String,
        unique: true,
        required: true
    },
    logo: {
        type: String,
        required: false
    }

});

const Company = mongoose.model('Company', CompanySchema)

module.exports = Company