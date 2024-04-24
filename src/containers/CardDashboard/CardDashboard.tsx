import React from "react";
import useFetchTransactions from "../../hooks/useFetchTransactions";
import { Card as CardType } from "../../ApiClient/index";

interface CardDashboardProps {
  card: CardType
}

function CardDashboard({ card }: CardDashboardProps) {
  console.log(card)
  const transactions = useFetchTransactions(card.id)
  return (
    transactions.map((data) => {
      return (
        <div>
          <p>{data.description}</p>
          <p>{data.amount}€</p>
        </div>
      )
    }
    ))
}

export default CardDashboard;