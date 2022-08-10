const mongoose = require('mongoose');

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb+srv://book-meeting:qZEsttxD27TYPol9@cluster0.apgcgum.mongodb.net/?retryWrites=true&w=majority', {

}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});