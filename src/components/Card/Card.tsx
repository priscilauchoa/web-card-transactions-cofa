import React from "react";
import { Card as CardType } from "../../index";

interface CardProps {
  card: CardType;
}

function Card({ card }: CardProps) {
  const { id, description } = card;
  return (
    <li key={id}>
      <p>{description}</p>
      <p>{id}</p>
    </li>
  )
}
export default Card; 