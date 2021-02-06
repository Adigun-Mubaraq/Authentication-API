//Import the mongoose module
var mongoose = require('mongoose');

const user = "mbq";
const pass = "mubaraq123";
const dbname = "animal_farm";


var mongoDB = `mongodb+srv://${user}:${pass}@cluster0.0mjoi.mongodb.net/${dbname}?retryWrites=true&w=majority`;


const InitiateMongoServer = async () => {
    try {
      await mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log("Connected to DB !!");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
  
  module.exports = InitiateMongoServer;
  