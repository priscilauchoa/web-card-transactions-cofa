import { useState, useEffect } from 'react'
import { Transaction, getTransactions } from '../index';

function useFetchTransactions(cardId: string): Array<Transaction> {
  const [transactions, setTransactions] = useState<Array<Transaction>>([])

  useEffect(() => {
    async function fetch() {
      const transactions = await getTransactions(cardId)
      setTransactions(transactions)
    }
    fetch()
  }, [cardId])
  return transactions
}

export default useFetchTransactions;