const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ved:12345@cluster.e9v30hq.mongodb.net/notes");
//mongodb+srv://ved:12345@cluster.e9v30hq.mongodb.net/notes

const db = mongoose.connection;

db.on('error',function(err){
  if(err){
    console.log('errr in connectin  to MONGODB ')
  }
});

db.once('open',function(){
  console.log('successfully connected to MONGODB');
});


module.exports = db;