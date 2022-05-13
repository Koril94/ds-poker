import './Table.css'
import CardComponent from '../CardComponent/CardComponent';
import GameContext from '../../GameContext';

interface TableProps {
  showCards: boolean
}

const Table = ({ showCards }: TableProps) => {

  return (
    <GameContext.Consumer>
      {game => {
        console.log(game)
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
                isVisible={showCards}
              />
            ))}
          </div>
        )
      }}
    </GameContext.Consumer>
  );
};

export default Table