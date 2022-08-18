const mongoose = require('mongoose');
const LoginHistorySchema = new mongoose.Schema({
    loginTime: { type: Date, default: Date.now },
    logoutTime: { type: Date, default: null },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference of Company schema
});
module.exports = mongoose.model('LoginHistory', LoginHistorySchema)
