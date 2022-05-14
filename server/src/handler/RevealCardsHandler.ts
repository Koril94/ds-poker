import { GameState } from "../classes/GameState";
import { MessageHandler } from "./MessageHandler";

export class RevealCardsHandler implements MessageHandler {
    handleMessage(message: any, gameState: GameState, playerID: string, playerName: string): string {
        gameState.reveal();
        return "";
    }

}
