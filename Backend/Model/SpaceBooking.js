const mongoose = require('mongoose');

const spaceBookingSchema = new mongoose.Schema({
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required:true }, // Reference of Company schema
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User',required:true }, // Reference of User schema
    companySpace: { type: mongoose.Schema.Types.ObjectId, ref: 'CompanySpace' , required:true}, // Reference of CompanySpace schema
    fromTime: {
        type: Date,
        required: true
    },
    toTime: {
        type: Date,
        required: true
    },
    participants:{type:[{ type: Schema.Types.ObjectId, ref: 'User' }], default:[]},
    bookedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null },
    deleted: { type: Boolean, default: false }
});

const SpaceBookingSchema = mongoose.model('SpaceBookingSchema', spaceBookingSchema)

module.exports = SpaceBookingSchema