const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        "text": String,
        "rating": {
            type: String,
            enum: ['1', '2', '3', '4', '5'],
        },
        "hotelId": {
            type: mongoose.SchemaTypes.ObjectId, ref: "Hotel"
        },
        "userId": {
            type: mongoose.SchemaTypes.ObjectId, ref: "User"
        },
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        },
    }  
);


const Review = mongoose.model('Review', userSchema);

module.exports = Review;