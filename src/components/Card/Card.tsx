import React from "react";
import { Card as CardType } from "../../ApiClient/index";

interface CardProps {
  card: CardType;
  onSelect: (card: CardType) => void;
}

function Card({ card, onSelect }: CardProps) {
  const { id, description } = card;

  const handleSelectCard = () => {
    onSelect(card)
  }

  return (
    <li key={id} onClick={handleSelectCard}>
      <p>{description}</p>
      <p>{id}</p>
    </li>
  )
}
export default Card; 