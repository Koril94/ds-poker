import { GameState } from "../classes/GameState";
import { MessageHandler } from "./MessageHandler";

export class NewRoundHandler implements MessageHandler{
    handleMessage(message: any, gameState: GameState, playerID: string): string {
        gameState.reset();
        return "";
    }
    
}