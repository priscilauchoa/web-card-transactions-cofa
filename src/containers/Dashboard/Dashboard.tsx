import Card from "../../components/Card/Card";
import useFetchCards from "../../hooks/useFetchCards"
import React, { useState } from "react";
import CardDashboard from "../CardDashboard/CardDashboard";
import { Card as CardType } from "../../ApiClient/index";
import { CardContainer } from "./styled";

function Dashboard() {
  const [cardSelected, setCardSelected] = useState<CardType>()
  const cards = useFetchCards()
  const handleSelectCard = (card: CardType) => {
    setCardSelected(card)
  }
  return (
    <>
      <CardContainer>
        {cards.map((card) => {
          return (
            <Card key={card.id} card={card} onSelect={handleSelectCard} />
          )
        })}
      </CardContainer>
      {cardSelected && <CardDashboard card={cardSelected} />}
    </>
  )
}

export default Dashboard;