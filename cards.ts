import type { Card } from './typing.d.ts';

export const cardData = async () => {
    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg');
    const yugiohData = await response.json<Array<Card>>();
    return yugiohData;
}