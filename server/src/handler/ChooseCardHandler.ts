import { GameState } from "../classes/GameState";
import { MessageHandler } from "./MessageHandler";

export class ChooseCardHandler implements MessageHandler {
    handleMessage(message: any, gameState: GameState, playerID: string): string {
        let params = message.params;
        gameState.players.get(params.playerId)?.setValue(params.cardValue);

        return "";
    }
    
}