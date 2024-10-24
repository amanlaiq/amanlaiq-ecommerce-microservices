// middleware/authenticate.js

const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer Token
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'YOUR_SECRET_KEY');
        req.user = await User.findById(decoded.id);
        if (!req.user) {
            return res.status(404).json({ message: "No user found" });
        }
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token", error });
    }
};

module.exports = authenticate;
