const express = require('express');
const app = express();
const path = require('path');

const todoRouter = require('./router/mainrouter');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('/views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'index.html'));
});

app.use('/todo', todoRouter);

app.listen(3000);
