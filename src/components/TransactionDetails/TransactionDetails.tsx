import { Card, Transaction } from "../../ApiClient/index";
import { TransactionContainer } from "./styled";

interface TransactionDetailsProps {
  transactions: Array<Transaction>;
  card: Card;
}

function TransactionDetails({ transactions, card }: TransactionDetailsProps) {

  return transactions.map((transaction) => {
    return (
      <TransactionContainer key={transaction.id} primary={card.type === "private"}>
        <h5>{transaction.description}</h5>
        <p>{transaction.amount}€</p>
      </TransactionContainer>
    )
  })
}

export default TransactionDetails;