const express = require('express');
const app = express();

app.use(express.json());

app.post('/notify', (req, res) => {
  res.send('Notification sent');
});

app.get('/', (req, res) => {
  res.send('Welcome to the Notification Service');
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Notification service running on port ${PORT}`);
});
