const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.redirect(req.originalUrl + 'html/home.html')
});

app.listen(port, () => console.log(`listening on port ${port}!`));