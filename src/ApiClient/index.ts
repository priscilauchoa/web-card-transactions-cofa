// import { cards } from "./ApiClient/data/cards.json";
// import { transactions } from "./ApiClient/data/cards.json";

type CardType = "business" | "private";

export interface Card {
  id: string;
  description: string;
  type: CardType;
}

export interface Transaction {
  id: string;
  description: string;
  amount: number;
}

export async function getCards(): Promise<Array<Card>> {
  const cards = await (await import("./data/cards.json")).default;
  return cards.map((card) => ({
    ...card,
    type: card.type as CardType,
  }));
}

export async function getTransactions(
  cardId: string
): Promise<Array<Transaction>> {
  const transactions: Record<string, Array<Transaction>> = await (
    await import("./data/transactions.json")
  ).default;

  if (transactions[cardId]) {
    return transactions[cardId];
  }

  throw new Error("cardId not found");
}
