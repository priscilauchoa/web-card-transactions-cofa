import React, { useEffect, useRef, ChangeEvent } from 'react'
import { Card, Transaction } from '../../ApiClient';
import styled from "@emotion/styled"

const InputFilter = styled.input`
  background-color: white;
  border-radius: 4px;
  box-sizing: border-box;
  color: black;
  margin: 8px 0 30px 0;
  padding: 0.6em; 
  width: 100%;
`
const LabelFilter = styled.label`
  color: black;
  display: flex;
  font-size: 12px;
  font-weight:bold;
  margin-top: 20px;
  width: 100%;
`

interface TransactionFilterProps {
  card: Card;
  transactions: Array<Transaction>;
  onFiltered: (transactions: Array<Transaction>) => void;
}

function TransactionFilter({ card, transactions, onFiltered }: TransactionFilterProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.value = ""
  }, [card, inputRef])


  const handleFilterAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(e.target.value)
    const filtered = amount ? transactions.filter((value) => value.amount >= amount) : transactions
    onFiltered(filtered)
  }

  return (
    <>
      <LabelFilter>Amount Filter</LabelFilter>
      <InputFilter ref={inputRef} placeholder='Amount' type="number" onChange={handleFilterAmount} />
    </>
  )
}

export default TransactionFilter