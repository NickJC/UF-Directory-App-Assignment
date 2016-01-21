'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
    
var listingData=JSON.parse(fs.readFileSync('listings.json', 'utf8'));
// Connect to the db
//mongoose.connect(config.db.uri);


//mongoose.connect(config.db.uri);

//fs.readFile('listings.json', 'utf8', function(err, data) {
//  listingData=data;//data is stored in memory
  
  //var length = listingData.length;
  //server is created
//});


mongoose.connect(config.db.uri, function(err, db) {
  if (err) throw err;
  //console.log("Connected to Database");
  /*var doc = {
        code : '',
        name:  '',
        coordinates: {
                latitude: 0, 
                longitude: 0
            }, 
        address: ''
        //created_at: Date,
        //updated_at: Date,
};*/
  //simple json record
  console.log(listingData.entries[0].code);
  for (var i=0;i<listingData.entries.length;i++)
  {
listingData.entries[i].coordinates=listingData.entries[i].coordinates||{};
listingData.entries[i].address=listingData.entries[i].address||"";
    var doc = Listing({
      code: listingData.entries[i].code,
      name:  listingData.entries[i].name,
        coordinates: {
                latitude: listingData.entries[i].coordinates.latitude, 
                longitude: listingData.entries[i].coordinates.longitude
            }, 
        address: listingData.entries[i].address
    });
//doc.code=listingData.entries[i].code;
//doc.name=listingData.entries[i].name;
//doc.coordinates.latitude=listingData.entries[i].coordinates.latitude;
//doc.coordinates.longitude=listingData.entries[i].coordinates.longitude;
//doc.address=listingData.entries[i].address;

console.log(doc.code);
//insert record
  doc.save(doc, function(err,record) {
    if (err) throw err;
    console.log("Record added as ");
  });

  }
  
  
  });
/* Connect to your database */

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */


/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */