import { GameState } from "../classes/GameState";
import { MessageHandler } from "./MessageHandler";

export class LeaveGameHandler implements MessageHandler {
    handleMessage(message: any, gameState: GameState, playerID: string): string {

        gameState.removePlayer(message.params.playerId);
        return "";
    }
    
}