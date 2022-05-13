import express from "express";
import { WebSocketServer } from "ws";
import * as ws from "ws";
import * as http from "http";
import * as path from "path";
import uuid from "uuid";
import { CreateGameHandler } from "./handler/CreateGameHandler";
import { ChooseCardHandler } from "./handler/ChooseCardHandler";
import { LeaveGameHandler } from "./handler/LeaveGameHandler";
import { NewRoundHandler } from "./handler/NewRoundHandler";
import { ParticipateHandler } from "./handler/ParticipateHandler";
import { MessageHandler } from "./handler/MessageHandler";
import { RevealCardsHandler } from "./handler/RevealCardsHandler";

let playersMap: Map<string, Object> = new Map<string, Object>();
const app = express();
const __dirname: string = process.env.PWD || "";
app.use(express.static(path.join(__dirname, "client", "build")));
app.get('/api/test', (req, res) => {
    console.log('Hello World')
});

// Right before your server.listen(), add this:
app.get("*", (req, res) => {
    console.log('Test')
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
server.listen(PORT);

const wss = new WebSocketServer({server});


wss.on('connection', (ws) => {
  playersMap.set(uuid.v4(), ws);
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
  ws.on('message', (data) => {
     try{
        let handler: MessageHandler;
        const dataJson = JSON.parse(data.toString());
        switch(dataJson["message"]){
          case "createGame":  handler = new CreateGameHandler(); return handler.handleMessage(dataJson).toString();
          case "chooseCard":  handler = new ChooseCardHandler(); return handler.handleMessage(dataJson).toString();
          case "leaveGame":  handler = new LeaveGameHandler(); return handler.handleMessage(dataJson).toString();
          case "newRound":  handler = new NewRoundHandler(); return handler.handleMessage(dataJson).toString();
          case "participate":  handler = new ParticipateHandler(); return handler.handleMessage(dataJson).toString();
          case "revealCard":  handler = new RevealCardsHandler(); return handler.handleMessage(dataJson).toString();
          default: console.log("no matching message found in: %s", JSON.stringify(dataJson));
        }
      } catch(e){
        console.log("something went wrong trying to process the message: %s", e);
      }
  });
});

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);
