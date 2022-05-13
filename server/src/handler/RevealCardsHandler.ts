import { MessageHandler } from "./MessageHandler";

export class RevealCardsHandler implements MessageHandler {
    handleMessage(message: JSON): string {
        return JSON.stringify(message);
    }

}
