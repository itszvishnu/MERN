const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err);
    //^Exit process with failure
    process.exit(1);
  }
};

//*Export the module function
module.exports = connectDB;
