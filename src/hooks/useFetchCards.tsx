import { useEffect, useState } from "react";
import { Card, getCards } from "../index";

function useFetchCards(): Array<Card> {
  const [cards, setCards] = useState<Array<Card>>([])

  useEffect(() => {
    async function fetch() {
      const cards = await getCards()
      setCards(cards)
    }
    fetch()
  }, [])
  return cards
}

export default useFetchCards;