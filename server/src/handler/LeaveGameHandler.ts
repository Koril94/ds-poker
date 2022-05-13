import { MessageHandler } from "./MessageHandler";

export class LeaveGameHandler implements MessageHandler {
    handleMessage(message: JSON): string {
        return JSON.stringify(message);
    }
    
}