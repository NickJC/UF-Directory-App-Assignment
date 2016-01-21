// Fill out these functions using Mongoose queries
var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
 var  Listing = require('./ListingSchema.js'); 
var config = require('./config');


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var findLibraryWest = function(db, callback) {
  
    //Find the document that contains data corresponding to Library West,
    //then log it to the console. 
   //console.log('Hey dude');
   
var cursor =db.collection('listings').find({code: "LBW"});
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.log(doc);
      } else {
         callback();
      }
   });

};


var removeCable = function(db, callback) {
  
    //Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    //on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    //and remove this listing from your database and log the document to the console. 
   
  
   db.collection('listings').deleteOne(
      { code: "CABL" },
      function(err, results) {
         console.log(results);
         callback();
      }
   );
};

var updatePhelpsMemorial = function(db, callback) {
  
  //  Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    //log the updated document to the console. 
   
   

db.collection('listings').updateOne(
      { code : "PHL" },
      {
        $set: { address: "University of Florida, Gainesville,FL 32603" }
      }, function(err, results) {
      console.log(results);
      callback();
   });
};

var retrieveAllListings = function(db, callback) {
  
  //  Retrieve all listings in the database, and log them to the console. 
   
   
  var cursor =db.collection('listings').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.log(doc);
      } else {
         callback();
      }
   });
};


MongoClient.connect(config.db.uri, function(err, db) {
  assert.equal(null, err);
findLibraryWest(db,function(){
  db.close;
});
});


MongoClient.connect(config.db.uri, function(err, db) {
  assert.equal(null, err);
removeCable(db,function(){
  db.close;
});
});


MongoClient.connect(config.db.uri, function(err, db) {
  assert.equal(null, err);

  updatePhelpsMemorial(db, function() {
      db.close();
  });
});


MongoClient.connect(config.db.uri, function(err, db) {
  assert.equal(null, err);
retrieveAllListings(db,function(){
  db.close;
});
});
