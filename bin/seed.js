const mongoose = require('mongoose');
const Hotel = require('./../models/hotel.model');

const hotelMock = require('./hotels-mock-data');

const DB_NAME = 'oh-review';

// SEED SEQUENCE

// CONNECT to mongo db (mongoose)

mongoose
    .connect("mongodb+srv://new_user_12:vxkY8E78e6k8MlQz@cluster0.sypc9.mongodb.net/oh-review-update?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then( x => {
        // AFTER CONNECTION , DROP THE EXISTING DATABASE
        console.log("Connected to DB" + DB_NAME);

        const promise = x.connection.dropDatabase();

        return promise;
    })
    .then( () => {
        // create hotels

        const promise = Hotel.create( hotelMock )
        return promise;
  })
  .then( ( createdHotels ) => {
      console.log(`Created ${createdHotels.length} hotels`);
      
      
      
      mongoose.connection.close();
    })