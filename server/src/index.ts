import express from "express";
import { WebSocketServer } from "ws";
import * as ws from "ws";
import * as http from "http";
import * as path from "path";

const app = express();
const __dirname: string = process.env.PWD || "";
console.log(process.cwd());
// ... other server.use middleware
app.use(express.static(path.join(__dirname, "client", "build")))
app.get('/api/test', (req, res) => {
    console.log('Hello World')
});

// Right before your server.listen(), add this:
app.get("*", (req, res) => {
    console.log('Test')
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const server = http.createServer(app);
const PORT = process.env.PORT || 5000

server.listen(PORT)

const wss = new WebSocketServer({server});

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);
