import Card from "../../components/Card/Card";
import useFetchCards from "../../hooks/useFetchCards"
import React, { useState } from "react";
import CardDashboard from "../CardDashboard/CardDashboard";
import { Card as CardType } from "../../ApiClient/index";
import styled from '@emotion/styled'

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75vw;
`

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