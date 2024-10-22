const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const mongoURI = process.env.MONGO_URI || 'mongodb://mongo:27017/paymentService';

mongoose.connect(mongoURI).then(() => console.log('MongoDB connected for Notification Service'))
  .catch(err => console.log('MongoDB connection error:', err));


const PaymentSchema = new mongoose.Schema({
  orderId: mongoose.Schema.Types.ObjectId,
  amount: Number,
  status: String // 'pending', 'completed', 'failed'
});

const Payment = mongoose.model('Payment', PaymentSchema);

app.get('/', (req, res) => {
  res.send('Welcome to the Payment Service');
});

app.post('/pay', async (req, res) => {
  const newPayment = new Payment(req.body);
  await newPayment.save();
  res.send('Payment processed');
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Payment service running on port ${PORT}`);
});



