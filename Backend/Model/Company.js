const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   
    code: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    }

});

const Company = mongoose.model('Company', CompanySchema)

module.exports = Company