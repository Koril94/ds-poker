import { Fibonacci } from '../objects/Fibonacci';
import { ChooseCardHandler } from '../handler/ChooseCardHandler';
import {Message} from "../classes/Message";

describe('ChooseCardHandler', () => {
    it('ChooseCardHandler', () => {
        const message = new Message();
        message.setMethod('chooseCard')
        message.setParams({
            gameId: '9ef90a72-c735-475a-92c9-0e1cabe63926',
            playerId: 'c315da3e-91f9-4713-9244-7d4a4deb60d1',
            cardValue: Fibonacci.D,
        });
        const handler = new ChooseCardHandler();
        expect(handler.handleMessage(message)).toMatch(JSON.stringify(message));
    });
});

export {};
