import { GameState } from "../classes/GameState";

export interface MessageHandler {

    handleMessage(message: any, gameState: GameState, playerID: string): string;

}