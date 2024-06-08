const express = require('express')
const path = require('path')

const imagesLinks = require('./assets/imageLinks').imagesLinks;

const PORT = process.env.PORT || 5001;

const getComponentsBlock = ({ componentsQty }) => {
  const getComponent = (index) => 
    `<div class="item" key={${index}}>
      <div class="item-image">
        <img src="${imagesLinks[index % 10]}" alt="Item Name"/>
        <div class="item-actions">
          <button type="button" class="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
      <div class="item-details">
        <h3 class="item-title">Item Title: ${index + 1}</h3>
        <p class="item-description">This is a brief description of the item, highlighting its key features and benefits.</p>
        <Link to="https://hidden-refuge-97632-934ef58eadcb.herokuapp.com">More info ...</Link>
        <div class="item-meta">
          <span class="item-price">$19.99</span>
          <span class="item-rating">Rating: ★★★★☆</span>
        </div>
      </div>
  </div>`;

    const getComponents = () => {
      const arrayWithObjects = Array.from({ length: componentsQty }, (_, index) => (getComponent(index)));
      return arrayWithObjects;
    }

  return (
      `<div class="components-block">
      <h1 class="font-weight-light components-qty">Components quantity: ${componentsQty}</h1>
        <div id="components" class="components">
          ${getComponents()}
        </div>
      </div>`
  );
};

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/getHtml', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Node.js Service</title>
      </head>
      <body>
          <h1>Welcome to my Node.js Service</h1>
          <p>This is a simple HTML response from a Node.js service.</p>
      </body>
      </html>
    `;
    res.send(htmlContent);
  })
  .use(express.json())
  .post('/getSSR', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const componentsQty = req.body.componentsQty;

    console.log(req.body);
    const componentBlock = getComponentsBlock({ componentsQty });
    res.send(componentBlock);
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
