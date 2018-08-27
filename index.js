const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const engine = require('ejs-locals');

const app = express();

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(require('./routes'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}...`));