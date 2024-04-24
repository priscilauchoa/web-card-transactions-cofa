import React, { useState, useEffect } from "react";
import useFetchTransactions from "../../hooks/useFetchTransactions";
import { Card as CardType, Transaction } from "../../ApiClient/index";
import TransactionDetails from "../../components/TransactionDetails/TransactionDetails";
import TransactionFilter from "../../components/TransactionFilter/TransactionFilter";

interface CardDashboardProps {
  card: CardType;
  amount: string;
}

function CardDashboard({ card, amount }: CardDashboardProps) {
  const transactions = useFetchTransactions(card.id)
  const [filteredTransactions, setFilteredTransactions] = useState<Array<Transaction>>()

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions])


  const HandleOnFiltered = (filtered: Array<Transaction>) => {
    setFilteredTransactions(filtered)
  }

  return (
    <>
      {transactions && <TransactionFilter amount={amount} transactions={transactions} onFiltered={HandleOnFiltered} />}
      {filteredTransactions &&
        <TransactionDetails card={card}
          filteredData={filteredTransactions}
        />}
    </>
  )
}

export default CardDashboard;