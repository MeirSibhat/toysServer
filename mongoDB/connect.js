const mongoose = require('mongoose');
const config = require("config");
 const dbName="dbToys"
mongoose.connect(`${config.get("mongoConnect")}`, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("connected  "+dbName);
 
});

module.exports=db;


