
import React from 'react'
import { Card, Transaction } from '../../ApiClient/index'
import styled from '@emotion/styled'

interface TransactionProps {
  primary: boolean
}
const TransactionContainer = styled.li<TransactionProps>`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin: 18px 0px;
    border-radius: 8px;
    color: black;
    background-color: ${props => (props.primary ? '#ECECEC' : '#C7EDFF')};
`

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