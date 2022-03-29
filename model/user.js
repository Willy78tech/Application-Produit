const mongoose = require('mongoose');

// Schema
const userSchema = mongoose.Schema({
    code : String,
    description: String,
    price : Number
}
);
//exporter le schema
//const User = mongoose.model('User', userSchema); // Users
//module.exports = User;
module.exports = mongoose.model('user', userSchema);



