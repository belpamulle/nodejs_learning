var http = require('http');

var myrequestListner = function(request, response){
        console.log("User made a request.."+request.url);
        response.writeHead(200,{"Context-type":"text/palin"});
        response.write("THis is data");
        response.end();
}

http.createServer(myrequestListner).listen(8888);
console.log("server started...")
