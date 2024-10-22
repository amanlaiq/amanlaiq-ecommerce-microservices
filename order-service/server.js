const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const mongoURI = process.env.MONGO_URI || 'mongodb://mongo:27017/orderService';

mongoose.connect(mongoURI).then(() => console.log('MongoDB connected for Notification Service'))
  .catch(err => console.log('MongoDB connection error:', err));


const OrderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  items: [{
    productId: mongoose.Schema.Types.ObjectId,
    quantity: Number
  }],
  status: String
});

const Order = mongoose.model('Order', OrderSchema);

app.get('/', (req, res) => {
  res.send('Welcome to the Order Service');
});


app.get('/orders', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

app.post('/orders', async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.status(201).send('Order placed');
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Order service running on port ${PORT}`);
});


