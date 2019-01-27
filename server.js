const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const port = process.env.PORT || 4000;

const app = express();

const _public = path.join(__dirname, './');

app.use(express.static(_public));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
  res.sendFile(_public);
});


app.listen(port, () => {
  console.log(`Application is now listening on port ${port}`);
});