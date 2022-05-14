import './Stats.css'

interface Player {
    id: string,
    name: string,
    value: number | string,
}
  
interface StatsProperties {
    players: Player[];
    hidden: boolean
}

const Stats = ({ players, hidden } : StatsProperties) => {
    let minValue = (hidden) ? 0 : Math.min(...players.map(p => parseInt(p.value.toString())))//    0 : parseInt(players[0].value.toString());
    let maxValue = minValue;
    let average = minValue;

    if (!hidden) {
        average = Math.round(players.reduce((prev: number, curr) => prev + parseInt(curr.value.toString()), 0)/players.length) 
        players.forEach((card: Player) => {


            let value = parseInt(card.value.toString()); 
            
            if (minValue > value) minValue = value;
            if (maxValue < value) maxValue = value;
        });
    }

    return (
      <div className="stats">
            <div>
                <p className="labelCol">Min</p>
                <p className="valueCol">{minValue!}</p>
            </div>
            <div>
                <p className="labelCol">Max</p>
                <p className="valueCol">{maxValue!}</p>
            </div>
            <div>
                <p className="labelCol">Average</p>
                <p className="valueCol">{average!}</p>
            </div>
      </div>
    );
  };

  export default Stats