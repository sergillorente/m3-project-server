const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        "image": String,
        "title": String,
        "description": String,
        "district": String,
        "category": Number
    }
);


const Hotel = mongoose.model('Hotel', userSchema);

module.exports = Hotel;