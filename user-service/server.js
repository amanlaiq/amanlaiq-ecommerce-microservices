const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS properly
app.use(cors({
  origin: 'http://localhost:3006', // Adjust this as needed
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specific methods you allow
  credentials: true, // If you need to handle cookies
}));

app.use(express.json());
app.use('/api/users', userRoutes); // Use the imported routes

mongoose.connect('mongodb://mongo:27017/userService', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Welcome to the User Service');
});

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
