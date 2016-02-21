
//nicholas cummings
//6985-5925
var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;


var listingData, server;


var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  

  if(request.url!="/listings"){//not accessing server through /listings
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("Bad gateway error");//bad gateway error
  response.end();
}
else{//accessing the server through /listings
  response.writeHead(200,{"Content-Type": "application/json"});
  response.end(listingData);//json object written
}
    
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  listingData=data;//data is stored in memory
  server = http.createServer(requestHandler).listen(8080);
  //server is created
});