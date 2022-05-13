import { MessageHandler } from "./MessageHandler";

export class CreateGameHandler implements MessageHandler {
    
    handleMessage(message: JSON): string {
        return JSON.stringify(message);
    }
    
}