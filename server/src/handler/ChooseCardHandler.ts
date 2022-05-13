import { MessageHandler } from "./MessageHandler";

export class ChooseCardHandler implements MessageHandler {
    handleMessage(message: JSON): string {
        return JSON.stringify(message);
    }
    
}