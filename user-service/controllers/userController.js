const jwt = require('jsonwebtoken');
const User = require('../models/user');

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, 'YOUR_SECRET_KEY', { expiresIn: '1d' });
};

console.log(__dirname);  // Logs the current directory path of `userController.js`
console.log(require.resolve('../models/user'));  // This will throw an error if the path is wrong

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }
    const user = new User({ name, email, password });
    await user.save();
    const token = generateToken(user);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: 'Error registering new user', error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = generateToken(user);
    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};
