const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema(
    {
        image: String,
        title: String,
        description: String,
        district: String,
        category: Number
    }
);


const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;