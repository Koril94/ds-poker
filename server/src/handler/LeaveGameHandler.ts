import { GameState } from "../classes/GameState";
import { MessageHandler } from "./MessageHandler";

export class LeaveGameHandler implements MessageHandler {
    handleMessage(message: any, gameState: GameState): string {

        gameState.removePlayer(message.params.playerId);
        return "";
    }
    
}