const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const mongoURI = process.env.MONGO_URI || 'mongodb://mongo:27017/productCatalog';

mongoose.connect(mongoURI).then(() => console.log('MongoDB connected for Notification Service'))
  .catch(err => console.log('MongoDB connection error:', err));


const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  inStock: Boolean
});

const Product = mongoose.model('Product', ProductSchema);

app.get('/', (req, res) => {
  res.send('Welcome to the Product Catalog Service');
});

app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.status(201).send('Product added');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Product Catalog service running on port ${PORT}`);
});


