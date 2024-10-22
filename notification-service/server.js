const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const mongoURI = process.env.MONGO_URI || 'mongodb://mongo:27017/notificationService';

mongoose.connect(mongoURI).then(() => console.log('MongoDB connected for Notification Service'))
  .catch(err => console.log('MongoDB connection error:', err));

const NotificationSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  message: String,
  status: String, // 'sent', 'failed'
});

const Notification = mongoose.model('Notification', NotificationSchema);

app.post('/notify', async (req, res) => {
  const newNotification = new Notification(req.body);
  await newNotification.save();
  res.send('Notification processed');
});

app.get('/', (req, res) => {
  res.send('Welcome to the Notification Service');
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Notification service running on port ${PORT}`);
});

