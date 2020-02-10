var express = require('express'),
    app     = express();

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/trees', (req, res) => {
  res.render('trees');
});

app.get('/flowers', (req, res) => {
  res.render('flowers');
});

app.get('/birds', (req, res) => {
  res.render('birds');
});

app.get('/horses', (req, res) => {
  res.render('horses');
});

app.get('/bees', (req, res) => {
  res.render('bees');
});

app.get('/beaches', (req, res) => {
  res.render('beaches');
});

app.get('/stars', (req, res) => {
  res.render('stars');
});

app.get('/mountains', (req, res) => {
  res.render('mountains');
});

app.get('/caves', (req, res) => {
  res.render('caves');
});

app.get('/sky', (req, res) => {
  res.render('sky');
});


app.listen(process.env.PORT || 3000, function(){
  console.log('Server listening')
});