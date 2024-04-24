// import { cards } from "./ApiClient/data/cards.json";
// import { transactions } from "./ApiClient/data/cards.json";
export interface Card {
  id: string;
  description: string;
  type: string;
}

export interface Transaction {
  id: string;
  description: string;
  amount: number;
}

export async function getCards(): Promise<Array<Card>> {
  const cards = await (await import("./data/cards.json")).default;
  return cards;
}

export async function getTransactions(
  cardId: string
): Promise<Array<Transaction>> {
  const transactions: Record<string, Transaction[]> = await (
    await import("./data/transactions.json")
  ).default;

  if (transactions[cardId]) {
    return transactions[cardId];
  }

  throw new Error("cardId not found");
}