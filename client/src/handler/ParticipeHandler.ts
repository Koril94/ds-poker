import { MessageHandler } from "./MessageHandler";

export class ParticipateHandler implements MessageHandler{
    handleMessage(message: JSON): string {
        return JSON.stringify(message);
    }

}