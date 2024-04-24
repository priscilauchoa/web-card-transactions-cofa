import React, { ChangeEvent } from 'react'
import { Transaction } from '../../ApiClient';

interface TransactionFilterProps {
  transactions: Array<Transaction>;
  onFiltered: (transactions: Array<Transaction>) => void;
  amount: string;
}

function TransactionFilter({ transactions, onFiltered }: TransactionFilterProps) {

  function handleFilterAmount(e: ChangeEvent<HTMLInputElement>) {
    const amount = parseFloat(e.target.value)
    const filtered = amount ? transactions.filter((value) => value.amount >= amount) : transactions
    onFiltered(filtered)
  }
  return (
    <>
      <label>Amount Filter</label>
      <input placeholder='Amount' type="number" onChange={handleFilterAmount} />
    </>
  )
}

export default TransactionFilter