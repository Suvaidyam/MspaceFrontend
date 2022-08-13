const mongoose = require('mongoose');

const spaceBookingSchema = new mongoose.Schema({
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, // Reference of Company schema
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference of User schema
    companySpace: { type: mongoose.Schema.Types.ObjectId, ref: 'CompanySpace' }, // Reference of CompanySpace schema
    fromTime: {
        type: String,
        required: true
    },
    toTime: {
        type: String,
        required: true
    },
    // participants:{
    //     type:String,
    //    required:true
    // },
    participants:{type:[{ type: Schema.Types.ObjectId, ref: 'User' }], default:[]},
    bookedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null },
    deleted: { type: Boolean, default: false }
});

const SpaceBookingSchema = mongoose.model('SpaceBookingSchema', spaceBookingSchema)

module.exports = SpaceBookingSchema