var http = require("http");
var 
var port = 7000;
var port2 =7500; 
function handleRequest(request, response) {
    response.end("Good JOB!!!!: "+request.url);
};

function secondServer(request,response){
    response.end("It's ok your are not that dumb!!!: "+request.url);
}

var server= http.createServer(handleRequest);
var server2=http.createServer(secondServer);

server.listen(port,function(){
    console.log("Server lisitening on: http://localholst:%s"+port);
});

server2.listen(port2,function(){
    console.log("Server lisitening on: http://localholst:%s"+port2);
});