const WebPage = `
  <head>
    <title>
      Sample Web Page
    </title>
  </head>
  <body style='font-family: Arial, Helvetica, sans-serif;'>
    <div style="text-align: center;">
      <h1>
        Sample Web Page
      </h1>
      <h4>
        This is a sample web page
      </h4>
    </div>
  </body>
`;

// Start web server
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send(
  WebPage
));
app.listen(3000, () => console.log('Listening on port 3000...'));