const WebPage = ({ title, subtitle }) => `
  <head>
    <title>
      ${title}
    </title>
  </head>
  <body style='font-family: Arial, Helvetica, sans-serif;'>
    <div style="text-align: center;">
      <h1>
        ${title}
      </h1>
      <h4>
        ${subtitle}
      </h4>
    </div>
  </body>
`;

// Start web server
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send(
  WebPage({
    title: 'Sample Web Page',
    subtitle: 'This is a sample web page'
  })
));
app.listen(3000, () => console.log('Listening on port 3000...'));