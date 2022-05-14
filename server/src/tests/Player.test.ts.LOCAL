import { Fibonacci } from '../objects/Fibonacci';
import { Player } from '../classes/Player';

describe('Player', () => {

    it('Player', async () => {
        const player = new Player("123");
        player.setName('ABC')
        player.setValue(Fibonacci.D)
        expect(player.getName()).toBe('ABC');
        expect(player.getValue()).toEqual(Fibonacci.D);
        expect(player.getId()).not.toBe("123");
    });
});

export {};
