const express = require('express');
const app = express();

app.use(express.json());

app.post('/pay', (req, res) => {
  res.send('Payment processed');
});

app.get('/', (req, res) => {
  res.send('Welcome to the Payment Service');
});


const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Payment service running on port ${PORT}`);
});
