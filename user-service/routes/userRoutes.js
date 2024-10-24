// routes/userRoutes.js

const express = require('express');
const { register, login } = require('../controllers/userController');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authenticate, (req, res) => {
    res.json(req.user);
});

module.exports = router;
