import { GameState } from '../classes/GameState';

describe('GameState', () => {

    it('GameState', async () => {
        const gameState = new GameState();
        gameState.setName('ABC')

        expect(gameState.getName()).toBe('ABC');
        expect(gameState.getId()).not.toBe(null);
        expect(gameState.getCookieCounter()).not.toBe(null);
        expect(gameState.getPlayers()).not.toBe(null);
    });
});

export {};
