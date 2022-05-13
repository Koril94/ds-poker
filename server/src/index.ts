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
import { resourceLimits } from "worker_threads";
import { GameState } from "./classes/GameState";
import { Player } from "./classes/Player";

let playersMap = new Map<string, ws.WebSocket>();
let gamesMap = new Map<string, GameState>();

const app = express();
app.use(express.static(path.join(__dirname, '../../',  "client", "build")));
app.get('/api/test', (req, res) => {
    console.log('Hello World')
});

// Right before your server.listen(), add this:
app.get("*", (req, res) => {
    console.log('Test')
    res.sendFile(path.join(__dirname, '../../', "client", "build", "index.html"));
});

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
server.listen(PORT);

const wss = new WebSocketServer({server});


wss.on('connection', (ws) => {
  const currentPlayerID: string = uuid.v4();
  playersMap.set(currentPlayerID, ws);
  ws.on('close', () => console.log('Client disconnected'));
  ws.on('message', (data) => {
    let handler: MessageHandler | undefined;
    let result: any;
    let gameState: GameState | undefined;
    try{
      let dataJson = JSON.parse(data.toString());
      gameState = dataJson["params"].gameId != null ? gamesMap.get(dataJson["params"].gameId) : new GameState();
      switch(dataJson["method"]){
        case "createGame": handler = new CreateGameHandler(); break;
        case "chooseCard": handler = new ChooseCardHandler(); break;
        case "leaveGame": handler = new LeaveGameHandler(); break;
        case "newRound": handler = new NewRoundHandler(); break;
        case "participate": handler = new ParticipateHandler(); break;
        case "revealCard": handler = new RevealCardsHandler(); break;
        default: console.log("no matching message found in: %s", JSON.stringify(dataJson));
      }

      // put new gamestate to games map if not present
      if(gameState && !gamesMap.has(gameState.getId())){
        gamesMap.set(gameState.getId(), gameState);
      }

      // create result message for identified message
      if(handler && gameState){
        result = handler.handleMessage(dataJson, gameState);
      }
    } catch(e){
      console.log("something went wrong trying to process the message: %s", e);
    }

    // update current websocket if result present
    if(result != null){
      ws.send(result);
    }

    // update all other websockets of the game state
    gameState?.getPlayers().forEach((player: Player, key) => {
      if(playersMap.has(player.getId())){
        const ws = playersMap.get(player.getId());
        ws?.send(JSON.stringify(gameState));
      }
    });
    
  });
});

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);
