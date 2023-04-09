import type { Card } from './typing.d.ts'

export const cardData = async () => {
  const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg')
  const yugiohData: any = await response.json()  
  const returnData: Array<Card> = []
  for (const { id, name, type, desc, atk, def, level, race, attribute, card_images } of yugiohData.data) {
    const card: Card = { id, name, type, desc, atk, def, level, race, attribute, card_images }
    returnData.push(card)
  }
  return returnData
}
