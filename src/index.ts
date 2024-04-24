// import { cards } from "./data/cards";
// import { transactions } from "./data/transactions";
export interface Card {
  id: string;
  description: string;
}

export interface Transaction {
  id: string;
  description: string;
  amount: number;
}

export async function getCards(): Promise<Card[]> {
  const cards = await (await import("./ApiClient/data/cards.json")).default;
  return cards;
}

export async function getTransactions(cardId: string): Promise<Card[]> {
  const transactions: Record<string, Transaction[]> = await (
    await import("./ApiClient/data/transactions.json")
  ).default;

  if (transactions[cardId]) {
    return transactions[cardId];
  }

  throw new Error("cardId not found");
}
