
import React from 'react'
import { Card, Transaction } from '../../ApiClient/index'


interface TransactionDetailsProps {
  card: Card
  filteredData: Array<Transaction>
}

function TransactionDetails({ filteredData }: TransactionDetailsProps) {
  return (
    <>
      {
        filteredData.map((data) => {
          return (
            <div>
              <p>{data.description}</p>
              <p>{data.amount}€</p>
            </div>
          )
        })
      }
    </>
  )
}

export default TransactionDetails