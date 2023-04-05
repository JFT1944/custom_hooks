import React, { useState } from "react";
import {v4 as uuid} from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import UseAxios from "./useAxios";
/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  // const [cards, setCards] = useState([]);
  // const addCard = async () => {
  //   const response = await axios.get(
  //     "https://deckofcardsapi.com/api/deck/new/draw/"
  //   );
  //   setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  // };
// let [data, gettingData] = UseAxios("https://deckofcardsapi.com/api/deck/new/draw/")
// let {response, error, isLoading} = UseAxios("https://deckofcardsapi.com/api/deck/new/draw/")
// console.log({response, error, isLoading}) 
// console.log(data, gettingData)
const [card, gettingCards] = UseAxios("https://deckofcardsapi.com/api/deck/new/draw/")







  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={()=>{gettingCards()}}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {console.log(card)}
        {console.log(typeof(card))}
        {card.map(cardData =>  {
        console.log(cardData[0])
        return <PlayingCard key={cardData.code} front={cardData.image} />
      })
        }
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
