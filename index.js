const express = require('express');
const server = express();
const { Server } = require('ws');

// ... other imports
const path = require("path");


const PORT = process.env.PORT || 5000
// ... other server.use middleware
server.use(express.static(path.join(__dirname, "client", "build")))
server.get('/api/test', (req, res) => {
    console.log('Hello World')
})

// ...

// Right before your server.listen(), add this:

server.get("*", (req, res) => {
    console.log('Test')
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

server.listen(PORT)

const wss = new Server({server});

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);
