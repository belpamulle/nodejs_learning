var http = require('http');
var fs = require('fs');

function onRequest(req,res){
    if(req.method == 'GET' && req.url== '/'){
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("./awesome.html").pipe(res);
    }
}


http.createServer(onRequest).listen(8888);

