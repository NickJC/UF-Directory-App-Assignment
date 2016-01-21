// Fill out these functions using Mongoose queries
var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
 var  Listing = require('./ListingSchema.js'); 
var config = require('./config');


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
/*
var findLibraryWest = function() {
  
    //Find the document that contains data corresponding to Library West,
    //then log it to the console. 
   console.log('Hey dude');
mongoose.connect(config.db.uri, function(err, listing) {
  if (err) throw err;

   Listing.find({code: 'LBW'},function(listing){
    if (err) throw err;

    console.log(listing);
 });



});


};
*/
/*
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   
   Listing.find({code: 'CABL'},function(err,listing){
listing.remove(function(listing){console.log('deleted');
      });
   });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   
   Listing.find({code:'PHL'},{address: 'Gainesville,FL'},function(err,listing){
    console.log(listing);
   });
};
*/
var retrieveAllListings = function(db, callback) {
  
  //  Retrieve all listings in the database, and log them to the console. 
   
   //Listing.find({},function(err,listings){
    //if(err) throw err;
    //console.log(listings);
   //});
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

//findLibraryWest();
console.log('done');
//removeCable();
//updatePhelpsMemorial();
MongoClient.connect(config.db.uri, function(err, db) {
  assert.equal(null, err);
retrieveAllListings(db,function(){
  db.close;
});
});