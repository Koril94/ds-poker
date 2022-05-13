import express from "express";
import { WebSocketServer } from "ws";
import * as http from "http";
import * as path from "path";
import { fileURLToPath } from "url";
var app = express();
var __fileName = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__fileName);
// ... other server.use middleware
app.use(express.static(path.join(__dirname, "client", "build")));
app.get('/api/test', function (req, res) {
    console.log('Hello World');
});
// Right before your server.listen(), add this:
app.get("*", function (req, res) {
    console.log('Test');
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
var server = http.createServer(app);
var PORT = process.env.PORT || 5000;
server.listen(PORT);
var wss = new WebSocketServer({ server: server });
wss.on('connection', function (ws) {
    console.log('Client connected');
    ws.on('close', function () { return console.log('Client disconnected'); });
});
setInterval(function () {
    wss.clients.forEach(function (client) {
        client.send(new Date().toTimeString());
    });
}, 1000);
