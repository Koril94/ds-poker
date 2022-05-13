import { MessageHandler } from "./MessageHandler";

export class CreateGameHandler implements MessageHandler {
    
    handleMessage(message: JSON): string {
        console.log('hello')
        return JSON.stringify(message);
    }
    
}