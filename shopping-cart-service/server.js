const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const mongoURI = process.env.MONGO_URI || 'mongodb://mongo:27017/shoppingCart';

mongoose.connect(mongoURI).then(() => console.log('MongoDB connected for Notification Service'))
  .catch(err => console.log('MongoDB connection error:', err));


const CartItemSchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  quantity: Number 
});

const CartItem = mongoose.model('CartItem', CartItemSchema);

app.get('/cart', async (req, res) => {
  const items = await CartItem.find();
  res.json(items);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Shopping Cart Service');
});

app.post('/cart/items', async (req, res) => {
  const newItem = new CartItem(req.body);
  await newItem.save();
  res.status(201).send('Item added to cart');
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Shopping Cart service running on port ${PORT}`);
});

