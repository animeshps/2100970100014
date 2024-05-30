 // server.js
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 9876;

app.use(bodyParser.json());

const windowSize = 10;
let window = [];

const apiEndpoints = {
  p: 'http://20.244.56.144/test/primes',
  f: 'http://20.244.56.144/test/fibonacci',
  e: 'http://20.244.56.144/test/even',
  r: 'http://20.244.56.144/test/random',
};

app.get('/numbers/:type', async (req, res) => {
  const { type } = req.params;
  if (!apiEndpoints[type]) {
    return res.status(400).send('Invalid type');
  }

  const previousState = [...window];

  try {
    const response = await axios.get(apiEndpoints[type], { timeout: 500 });
    const numbers = response.data.numbers || [];

    numbers.forEach((num) => {
      if (!window.includes(num)) {
        if (window.length >= windowSize) {
          window.shift();
        }
        window.push(num);
      }
    });

    const average = window.length ? (window.reduce((acc, num) => acc + num, 0) / window.length).toFixed(2) : 0;

    res.json({
      windowPrevState: previousState,
      windowCurrState: window,
      numbers: numbers,
      avg: parseFloat(average),
    });
  } catch (error) {
    console.error('Error fetching numbers:', error.message);
    res.status(500).send('Error fetching numbers');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
