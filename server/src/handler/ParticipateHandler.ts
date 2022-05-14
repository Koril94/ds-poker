import { GameState } from "../classes/GameState";
import { MessageHandler } from "./MessageHandler";

export class ParticipateHandler implements MessageHandler{
    handleMessage(message: any, gameState: GameState, playerID: string, playerName: string): string {

        gameState.addNewPlayer(playerID, playerName);
        return "";
    }

}
