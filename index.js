const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const turnstile = require('./handlers/turnstile');
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/home.html"));
});

app.post("/turnstile", turnstile);

app.get('/turnstile', (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/turnstile.html"));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});