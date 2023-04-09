import { cardData } from './cards.ts'
const yugiCardData = await cardData()
console.log(yugiCardData)
export const cardList = () => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yu-gi-oh Ban list</title>
</head>`
