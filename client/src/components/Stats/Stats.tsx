import React, { useEffect, useState } from "react";
import CardOnHand from "../CardOnHand/CardOnHand";
import CardComponent from '../CardComponent/CardComponent';
import Card from '../../objects/Card';

interface StatsProperties {
    cards: Card[];
}

const Stats = ({ cards } : StatsProperties) => {

    let hidden = parseInt(cards[0].value.toString()) == NaN;


    let minValue = (hidden) ? 0 : parseInt(cards[0].value.toString());
    let maxValue = minValue;
    let average = minValue;

    if (!hidden) {
        cards.map((card: Card) => {
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