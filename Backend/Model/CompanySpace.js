const mongoose = require('mongoose');

const companySpaceSchema = new mongoose.Schema({

    code: {
        type: String,
        required: true
    },
    spaceType: {
        type: String,
        required: true
    },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, // Reference of Company schema
    
    maxParticipant:{
        type:Number,
        required: true
    }
});

const CompanySpace = mongoose.model('CompanySpace', companySpaceSchema)

module.exports = CompanySpace