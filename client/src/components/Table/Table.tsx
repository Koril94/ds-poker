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
        return(
          <div className='table'
            style={{
              display: "flex",

            }}
          >
            { gameContext.game.players.map((player) => {
              console.log('vslue: ', player.value)
              return (
              <CardComponent
                key={player.id}
                name={player.name}
                value={player.value === '' ? '-' : player.value}
                isVisible={gameContext.game.revealed}
              />
            )})}
          </div>
        )
      }}
    </GameContext.Consumer>
  );
};

export default Table