const express = require('express');
const app = express();

app.use(express.json());

app.get('/orders', (req, res) => {
  res.send('Order list');
});

app.post('/orders', (req, res) => {
  res.status(201).send('Order placed');
});

app.get('/', (req, res) => {
  res.send('Welcome to the Order Service');
});


const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Order service running on port ${PORT}`);
});
