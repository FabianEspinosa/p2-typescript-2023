import { cardData } from './cards.ts'
const yugiCardData = await cardData()
const cardListData = () => {
  let cardHtml = ''
  for (const card of yugiCardData) {
    cardHtml += `<div class='yugicard'>
                  <a href="detailCard.html?id=${card.id}" data-id="${card.id}">
                    <img src=${card.card_images[0].image_url_small}>
                  </a>
                  <p>${card.type}</p>
                  <p>${card.name}</p>
                </div>`
  }
  return cardHtml
}
export const cardList = () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" sizes="32x32" href="https://img.yugioh-card.com/eu/wp-content/themes/yugioh/images/favicon/favicon-32x32.png" />
  <link rel="stylesheet" href="./index.css" />
  <title>Yu-gi-oh Ban list</title>
  </head>
  <body>
  <h1>Yu-gi-oh Ban list</h1>
  <div class="card-container">
    ${cardListData()} 
  </body>
  </div>
  </html>`
export const cardDetail = () =>
  `<!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <link rel="icon" type="image/png" sizes="32x32" href="https://img.yugioh-card.com/eu/wp-content/themes/yugioh/images/favicon/favicon-32x32.png" />
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <script>
        function showCard(card) {
          const cardImg = document.getElementById('card-img')
          const cardName = document.getElementById('card-name')
          const cardType = document.getElementById('card-type')
          const cardAttr = document.getElementById('card-attr')
          const cardRace = document.getElementById('card-race')
          const cardLevel = document.getElementById('card-level')
          const cardAtk = document.getElementById('card-atk')
          const cardDef = document.getElementById('card-def')
          const cardDesc = document.getElementById('card-desc')
  
          cardImg.src = card.card_images[0].image_url
          cardName.textContent = card.name
          cardType.textContent = card.type
          cardAttr.innerHTML += \`<img src="https://images.ygoprodeck.com/images/cards/\${card.attribute}.jpg" /><p>\${card.attribute}</p>\`
          cardRace.innerHTML += \`<img src="https://images.ygoprodeck.com/images/cards/icons/race/\${card.race}.png" /><p>\${card.race}</p>\`
          cardLevel.textContent = card.level
          cardAtk.textContent = card.atk
          cardDef.textContent = card.def
          cardDesc.textContent = card.desc
        }
        async function searchCardById(id) {
          const response = await fetch(\`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=\${id}\`)
          const data = await response.json()
  
          if (data.data.length > 0) {
            const card = data.data[0]
            showCard(card)
          } else {
            console.log('Card not found')
          }
        }
        document.addEventListener('DOMContentLoaded', () => {
          const urlParams = new URLSearchParams(window.location.search);
          const id = urlParams.get('id'); 
          searchCardById(id)
        })
      </script>
      <title>Yu-gi-oh card detail</title>
      </head>
   <body>
   <a href="index.html"><i class="fa fa-arrow-circle-left"></i></a>
   <div class="container">
    <div>
      <img id="card-img" />
    </div>
    <div>
      <h1 id="card-name"></h1>
      <div>
        <div>
          <p>Type</p>
          <p id="card-type"></p>
        </div>
        <div id="card-attr">
          <p>Attribute</p>
        </div>
        <div id="card-race">
          <p>Race</p>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>
              <p>Level</p>
              <img src="https://ygoprodeck.com/wp-content/uploads/2017/01/level.png" />
              <p id="card-level"></p>
            </div>
            <div>
              <p>ATK</p>
              <i class="fa fa-hand-rock-o"></i>
              <p id="card-atk"></p>
            </div>
            <div>
              <p>DEF</p>
              <i class="fa fa-shield"></i>
              <p id="card-def"></p>
            </div>
          </div>
          <div>
            <p>Card Text</p>
            <p id="card-desc"></p>
          </div>
        </div>
      </div>    
    </div>
    </div>
    </body>
    </html>
  `
