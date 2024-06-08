const express = require('express')
const path = require('path')
const cors = require('cors')

const getComponentsBlock = require('./components/components').getComponentsBlock;

const PORT = process.env.PORT || 5001;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .use(cors())
  .use(express.json())
  .post('/getSSR', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const componentsQty = req.body.componentsQty;

    const componentBlock = getComponentsBlock({ componentsQty });
    res.send(componentBlock);
  })
  .post('/getSSG', (req, res) => {
    const componentsQty = req.body.componentsQty;

    const file = `generatedHtml/${componentsQty}.html`;
    res.sendFile(file, {root: __dirname })
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
