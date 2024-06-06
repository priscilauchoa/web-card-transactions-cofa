import React, { useEffect, useRef, ChangeEvent } from "react"
import { Card, Transaction } from "../../ApiClient";
import { InputFilter, LabelFilter } from "./styled";

interface TransactionFilterProps {
  card: Card;
  transactions: Array<Transaction>;
  onFiltered: (transactions: Array<Transaction>) => void;
}

function TransactionFilter({ card, transactions, onFiltered }: TransactionFilterProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.value = "";
  }, [card, inputRef]);


  const handleFilterAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(e.target.value);
    console.log(e.target.value)
    const filtered = amount ? transactions.filter((value) => value.amount >= amount) : transactions;
    onFiltered(filtered);
  }

  return (
    <>
      <LabelFilter>Amount Filter</LabelFilter>
      <InputFilter ref={inputRef} placeholder="Amount" type="number" onChange={handleFilterAmount} />
    </>
  )
}

export default TransactionFilter;