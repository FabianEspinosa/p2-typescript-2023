import { cardData } from './cards.ts'
const yugiCardData = await cardData()
const cardListData = () => {
  let cardHtml = ''
  for (const card of yugiCardData) {
    cardHtml += `<div class='yugicard'>
      <a href="detailCard.html?id=${card.id}" data-id="${card.id}">
        <img alt="yu gi oh card ${card.name}" src=${card.card_images[0].image_url_small}>
      </a>
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
  </div>
  </body>
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
        <link rel="stylesheet" href="./detail.css" />
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
            cardImg.alt = \`yu gi oh card \${card.name}\`
            cardName.textContent = card.name
            cardType.textContent = card.type
            if (card.attribute) {
              cardAttr.innerHTML += \`<span><img alt="yu gi oh card attribute \${card.attribute}" src="https://images.ygoprodeck.com/images/cards/\${card.attribute}.jpg" /><p>\${card.attribute}</p></span>\`
            }
            else { 
              cardAttr.innerHTML += '<p>N/A</p>'
            }
            cardRace.innerHTML += \`<span><img alt="yu gi oh card race \${card.race}" src="https://images.ygoprodeck.com/images/cards/icons/race/\${card.race}.png" /><p>\${card.race}</p></span>\`
            cardDesc.textContent = card.desc            
            if (card.level) {
              cardLevel.textContent = card.level
              cardAtk.textContent = card.atk
              cardDef.textContent = card.def
            } else {
              const cardDesc2 = document.getElementById('desc2')
              cardDesc2.style.display = 'none'
            }           
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
            <div class="card-img-container">
              <img id="card-img" />
            </div>
            <div class="card-desc-container">
              <h1 id="card-name"></h1>
              <div class="card-desc">
                <div>
                  <h2>Type</h2>
                  <p id="card-type"></p>
                </div>
                <div id="card-attr">
                  <h2>Attribute</h2>
                </div>
                <div id="card-race">
                  <h2>Race</h2>
                </div>
              </div>
                <div id ="desc2" class="card-desc">
                  <div>
                    <h2>Level/Rank</h2>
                    <span>
                      <img alt="yu gi oh card level" src="https://ygoprodeck.com/wp-content/uploads/2017/01/level.png" />
                      <p id="card-level"></p>
                    </span>
                  </div>
                  <div>
                    <h2>ATK</h2>
                    <span>
                      <i class="fa fa-hand-rock-o"></i>
                      <p id="card-atk"></p>
                    </span>
                  </div>
                  <div>
                    <h2>DEF</h2>
                    <span>
                      <i class="fa fa-shield"></i>
                      <p id="card-def"></p>
                    </span>
                  </div>
                </div>
                <div class="card-text">
                  <h2>Card Text</h2>
                  <p id="card-desc"></p>
                </div>                   
            </div>
            </div>
        </body>
      </html>
  `
