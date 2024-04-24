import { useState, useEffect } from "react";
import { Transaction, getTransactions } from "../ApiClient/index";

function useFetchTransactions(cardId: string): Array<Transaction> {
  const [transactions, setTransactions] = useState<Array<Transaction>>([])

  useEffect(() => {
    async function fetch() {
      try {
        const transactions = await getTransactions(cardId);
        setTransactions(transactions);
      } catch (err) {
        console.error(err);
        setTransactions([]);
      }
    }
    fetch()
  }, [cardId])
  return transactions;
}

export default useFetchTransactions;