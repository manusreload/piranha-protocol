
var LOCAL_PORT = 9339;
var REMOTE_PORT = 9339;
var REMOTE_ADDR = "game.clashofclans.com";

/*jshint node:true*/
'use strict';

var net = require('net');
var fs = require('fs');

// proxy server
var proxy = net.createServer(function (socket) {
    
    var sessionName = new Date().getTime() + ".proxy";
    var serverFile = sessionName + ".recv";
    var clientFile = sessionName + ".send";
    var client;

    console.log('Client connected to proxy');

    // Create a new connection to the TCP server
    client = net.connect(REMOTE_PORT, REMOTE_ADDR);
    console.log("Session name: " + sessionName);
    client.on('data', function (data) {
        console.log(">> Data from server");
        fs.appendFile(serverFile, data, function (err) {});
        socket.write(data);
//        console.log(data.toString());
//        client.end();
    });
    
    socket.on('data', function (data) {
        console.log('<< Data from client');
        fs.appendFile(clientFile, data, function (err) {});
        client.write(data);
    });
    
    client.on('close', function () {
        console.log('Client disconnected from proxy');
        socket.close();
    });
    // 2-way pipe between client and TCP server
//    socket.pipe(client).pipe(socket);

    socket.on('close', function () {
        console.log('Client disconnected from proxy');
        client.close();
    });

    socket.on('error', function (err) {
        console.log('Error: ' + err.soString());
    });
});
proxy.listen(LOCAL_PORT);