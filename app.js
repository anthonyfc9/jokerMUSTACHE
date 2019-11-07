const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const port = process.env.PORT || 8000;


app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

const jokerData = require('./data');

app.get('/', (req, res) => {
    res.render("index", jokerData);
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});