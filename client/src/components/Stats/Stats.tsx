import Card from '../../objects/Card';
import './Stats.css'

interface StatsProperties {
    cards: Card[];
}

const Stats = ({ cards } : StatsProperties) => {

    let hidden = isNaN((parseInt(cards[0].value.toString())));

    let minValue = (hidden) ? 0 : parseInt(cards[0].value.toString());
    let maxValue = minValue;
    let average = minValue;

    if (!hidden) {
        cards.forEach((card: Card) => {
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