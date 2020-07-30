const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// Import seed data
const dbSeed = require('./seed/gallery.js');

// Define model
const Images = require('./models/images.js');

/*******************************/
/* Mongoose/MongoDB Connection */
/*******************************/

const dbURI = process.env.MONGODB_URL;
mongoose.connect(dbURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', function(error){
  console.log(`Connection Error: ${error.message}`)
});

db.once('open', function() {
  console.log('Connected to DB...');

});

Images.insertMany(dbSeed, function(error, images) {
  console.log('Data import completed.')
  mongoose.connection.close();
});

