import Card from "../../components/Card/Card";
import useFetchCards from "../../hooks/useFetchCards"
import React from "react";

function Dashboard() {
  const cards = useFetchCards()
  return (
    <div>
      {cards.map((card) => {
        return (
          <Card key={card.id} card={card} />
        )
      })}
    </div>
  )
}

export default Dashboard;