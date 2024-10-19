const express = require('express');
const app = express();

app.use(express.json());

app.get('/products', (req, res) => {
  res.send('Product list');
});

app.post('/products', (req, res) => {
  res.status(201).send('Product added');
});

app.get('/', (req, res) => {
  res.send('Welcome to the Product Catalog Service');
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});
