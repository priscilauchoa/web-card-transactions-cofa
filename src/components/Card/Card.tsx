import React from "react";
import { Card as CardType } from "../../ApiClient/index";
import styled from "@emotion/styled"

interface CardContainerProps {
  primary: boolean
}
const CardContainer = styled.div<CardContainerProps>`
    width: 35%;
    height: 116px;
    color: black;
    padding: 0 20px;
    text-align: start;
    border-radius: 8px;
    background-color: ${props => (props.primary ? '#ECECEC' : '#C7EDFF')};
    &:hover {
        color: black;
  }
`
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