import { MessageHandler } from "./MessageHandler";

export class NewRoundHandler implements MessageHandler{
    handleMessage(message: JSON): string {
        return JSON.stringify(message);
    }
    
}