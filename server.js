const WebSocket = require('ws');

const PORT = 5000;

const wsServer = new WebSocket.Server({
    port: PORT
});


wsServer.on('connection', function (socket) {

    // Some feedback on the console
    console.log("A client just connected");

   // Attach some behavior to the incoming socket
    socket.on('message', function (msg) {

        console.log("Received message from client: "  + msg);
       // socket.send("Take back" + msg);

  // Broadcast that message to all connected clients
        wsServer.clients.forEach(function (client) {
            client.send("Koi bool raha hai" + msg);
        });

    });
});

console.log("Port Number" + PORT);