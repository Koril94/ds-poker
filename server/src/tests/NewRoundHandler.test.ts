import { GameState } from '../classes/GameState';
import { Message } from '../classes/Message';
import { NewRoundHandler } from '../handler/NewRoundHandler';

describe('ChooseCardHandler', () => {
    const newRoundMessage = new Message()
    newRoundMessage.setMethod('newRound');
    newRoundMessage.setParams({
            gameId: '9ef90a72-c735-475a-92c9-0e1cabe63926',
        });

    it('ChooseCardHandler', async () => {
        const handler = new NewRoundHandler();
        const gameState = new GameState();
        expect(handler.handleMessage(newRoundMessage, gameState, "", "")).toMatch('');
    });
});

export {};
