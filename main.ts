import { writeFile } from "fs/promises";
import { cardList } from "./cardList.ts";
const cards =  await cardList();
console.log(cards)
await writeFile('index.html', cards);

