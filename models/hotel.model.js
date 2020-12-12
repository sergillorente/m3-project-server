const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema(
    {
        image: String,
        title: String,
        description: String,
        district: {type: String, enum:['Ciutat Vella', 'Eixample', 'Sants-Montjuïc', 'Les Corts', 'Sarrià-Sant Gervasi', 'Gràcia', 'Horta-Guinardó', 'Nou Barris', 'Sant Martí']},
        category: Number
    }
);


const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;