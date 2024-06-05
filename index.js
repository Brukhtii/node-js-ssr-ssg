const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5001

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
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
