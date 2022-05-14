import './Table.css'
import CardComponent from '../CardComponent/CardComponent';
import GameContext from '../../GameContext';

interface TableProps {
  showCards: boolean
}

const Table = ({ showCards }: TableProps) => {

  return (
    <GameContext.Consumer>
      {gameContext => {
        const game = gameContext.game;
        return(
          <div className='table'
            style={{
              display: "flex",

            }}
          >
            { game.players.map((player) => (
              <CardComponent
                key={player.id}
                name={player.name}
                value={player.value}
                isVisible={game.isRevealed}
              />
            ))}
          </div>
        )
      }}
    </GameContext.Consumer>
  );
};

export default Table