import { writeFile } from 'fs/promises'
import { cardList, cardDetail } from './cardList.ts'
const cards = await cardList()
const cardsDetail = await cardDetail()
await writeFile('index.html', cards)
await writeFile('detailCard.html', cardsDetail)
