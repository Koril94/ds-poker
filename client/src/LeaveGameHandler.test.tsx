const {LeaveGameHandler} = require('./handler/LeaveGameHandler');

describe('ChooseCardHandler', () => {
    const leaveGameMessage = {
        method: 'leaveGame',
        params: {
            gameId: '9ef90a72-c735-475a-92c9-0e1cabe63926',
            playerId: 'c315da3e-91f9-4713-9244-7d4a4deb60d1',
        }
    };

    it('LeaveGameHandler', async () => {
        const handler = new LeaveGameHandler();
        expect(handler.handleMessage(leaveGameMessage)).toMatch(JSON.stringify(leaveGameMessage));
    });
});

export {};
