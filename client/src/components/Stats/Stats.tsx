interface Player {
    id: string,
    name: string,
    value: number | string,
}
  
interface StatsProperties {
    players: Player[];
}

const Stats = ({ players } : StatsProperties) => {

    let hidden = isNaN((parseInt(players[0].value.toString())));

    let minValue = (hidden) ? 0 : parseInt(players[0].value.toString());
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
      <div>
            <div>
                <p className="labelCol">Minvalue</p>
                <p className="valueCol">{minValue!}</p>
            </div>
            <div>
                <p className="labelCol">Maxvalue</p>
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