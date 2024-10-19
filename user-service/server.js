const express = require('express');
const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  res.send('User list');
});

app.post('/users', (req, res) => {
  res.status(201).send('User created');
});

app.get('/', (req, res) => {
  res.send('Welcome to the User Service');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
