//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT1=7000;

var PORT2=7500;

//We need a function which handles requests and send response
function handleRequestA(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequestA);

//Lets start our server
server.listen(PORT1, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT1);
});
//We need a function which handles requests and send response
function handleRequestB(request, response){
    response.end('Oops!! Path Access Denied,Better luck next time: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequestB);

//Lets start our server
server.listen(PORT2, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT2);
});