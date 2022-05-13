export interface MessageHandler {

    handleMessage(message: JSON): string;

}