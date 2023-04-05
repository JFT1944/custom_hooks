import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import UseFlip from "./hooks";
import UseAxios from "./useAxios";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };

console.log(front)


  
 let [flipState, flip] = UseFlip()









  return (
    <img
      src={flipState ? front : back}
      alt="playing card"
      onClick={flip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
