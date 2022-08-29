const mongoose = require('mongoose');

const companySpaceSchema = new mongoose.Schema({

    code: {
        type: String,
        required: true,
        unique:true
    },
    spaceType: {
        type: String,
        required: true,
        enum:["SEAT", "MEETING_ROOM"],
        default:"SEAT"
    },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true }, // Reference of Company schema
    
    maxParticipant:{
        type:Number,
        required: true,
        default:1,
    },
    url:{
        type:String,
        default:null
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const CompanySpace = mongoose.model('CompanySpace', companySpaceSchema)

module.exports = CompanySpace