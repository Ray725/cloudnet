const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const globalvar = 0;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/modifyVar', (req, res) => {
  globalvar = req.body.change;
  res.send(
    `Modified global var to be ${globalvar}`
  );
});

app.get('/api/getVar', (req, res) => {
  res.send(`globalvar: ${globalvar}`);
});

app.post('/api/world', (req, res) => {
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

module.exports = app;
