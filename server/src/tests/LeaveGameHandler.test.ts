import { GameState } from '../classes/GameState';
import { Message } from '../classes/Message';
import { LeaveGameHandler } from '../handler/LeaveGameHandler';

describe('ChooseCardHandler', () => {
    const leaveGameMessage = new Message()
    leaveGameMessage.setMethod('leaveGame');
    leaveGameMessage.setParams({
            gameId: '9ef90a72-c735-475a-92c9-0e1cabe63926',
            playerId: 'c315da3e-91f9-4713-9244-7d4a4deb60d1',
        });

    it('LeaveGameHandler', async () => {
        const handler = new LeaveGameHandler();
        const gameState = new GameState();
        expect(handler.handleMessage(leaveGameMessage, gameState, "", "")).toMatch('');
    });
});

export {};
