import { MessageHandler } from "./MessageHandler";

export class RevealCardHandler implements MessageHandler {
    handleMessage(message: JSON): string {
        return JSON.stringify(message);
    }
    
}