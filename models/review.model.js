const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        text: String,
        rating: {
            type: String,
            enum: ['1', '2', '3', '4', '5']
        },
        hotelId: {
            type: Schema.Types.ObjectId, ref: "Hotel"
        },
        userId: {
            type: Schema.Types.ObjectId, ref: "User"
        }},
        { timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
          }
        }
);


const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;