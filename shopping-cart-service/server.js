const express = require('express');
const app = express();

app.use(express.json());

app.get('/cart', (req, res) => {
  res.send('Shopping cart contents');
});

app.post('/cart/items', (req, res) => {
  res.status(201).send('Item added to cart');
});
app.get('/', (req, res) => {
  res.send('Welcome to the Shopping Cart Service');
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Cart service running on port ${PORT}`);
});
