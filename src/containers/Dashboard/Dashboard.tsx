import useFetchCards from "../../hooks/useFetchCards"
import React from "react";

function Dashboard() {
  const cards = useFetchCards()
  return (
    <div>
      {cards.map((card) => {
        return (<p>{card.id}</p>)
      })}
    </div>
  )
}

export default Dashboard;