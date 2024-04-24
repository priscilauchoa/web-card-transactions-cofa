import React from 'react'
import { Card, Transaction } from '../../ApiClient/index'
import { TransactionContainer } from './styled'


interface TransactionDetailsProps {
  filteredData: Array<Transaction>
  card: Card
}

function TransactionDetails({ filteredData, card }: TransactionDetailsProps) {
  return filteredData.map((data) => {
    return (
      <TransactionContainer primary={card.type === 'private' ? true : false}>
        <p>{data.description}</p>
        <p>{data.amount}€</p>
      </TransactionContainer>
    )
  })
}

export default TransactionDetails