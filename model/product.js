const mongoose = require('mongoose');

// Schema
const productSchema = mongoose.Schema({
    code : {
        type : String,
        required : true,
        unique : true
    },
    description: {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    }
}
);
//exporter le schema
module.exports = mongoose.model('product', productSchema);




