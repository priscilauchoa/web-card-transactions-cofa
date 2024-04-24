import React from "react";
import { Card as CardType } from "../../ApiClient/index";
import CardContainer from "./styled";

interface CardProps {
  card: CardType;
  onSelect: (card: CardType) => void;
}

function Card({ card, onSelect }: CardProps) {
  const { id, description, type } = card;

  const handleOnSelect = () => {
    onSelect(card)
  }

  return (
    <CardContainer onClick={handleOnSelect} id={id} primary={type === 'private' ? true : false}>
      <p>{description}</p>
      <p>{id}</p>
    </CardContainer>
  )
}
export default Card; 