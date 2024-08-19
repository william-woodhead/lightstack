const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const turnstile = require('./handlers/turnstile');
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/home.html"));
});

app.post("/turnstile", turnstile);

app.get('/turnstile', (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/turnstile.html"));
});

app.get('/speculation-1', (req, res) => {
  res.set("Cache-Control", "public,max-age=120");
  setTimeout(() => {
    res.sendFile(path.join(__dirname, "/pages/speculation-1.html"));
  }, 2000);
});
app.get('/speculation-2', (req, res) => {
  res.set("Cache-Control", "public,max-age=120");
  setTimeout(() => {
    res.sendFile(path.join(__dirname, "/pages/speculation-2.html"));
  }, 2000);
});
app.get('/speculation-3', (req, res) => {
  res.set("Cache-Control", "public,max-age=120");
  setTimeout(() => {
    res.sendFile(path.join(__dirname, "/pages/speculation-3.html"));
  }, 2000);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});