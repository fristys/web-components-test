const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const request = require('request');

const apiKey = 'fc308f22e515400e84f04eecdb681448';

app.use(cors());
app.use(bodyParser.json());
app.use('/js', express.static('js'));

app.get('/proxy', (req, res) =>
  // CORS be like...
  request(`http://newsapi.org/v2/everything?q=front%20end%20development&apiKey=${apiKey}`).pipe(res)
);

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.listen(1337, () => console.warn(`Ready at http://localhost:1337`));
