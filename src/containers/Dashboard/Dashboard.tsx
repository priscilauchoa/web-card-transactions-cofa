import Card from "../../components/Card/Card";
import useFetchCards from "../../hooks/useFetchCards"
import { useState } from "react";
import CardDashboard from "../CardDashboard/CardDashboard";
import { Card as CardType } from "../../ApiClient/index";
import { CardContainer } from "./styled";

function Dashboard() {
  const [selectedCard, setSelectedCard] = useState<CardType>();
  const cards = useFetchCards();
  const handleSelectCard = (card: CardType) => {
    setSelectedCard(card);
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
      {selectedCard && <CardDashboard card={selectedCard} />}
    </>
  )
}

export default Dashboard;