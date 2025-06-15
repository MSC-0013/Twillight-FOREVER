const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
router.post('/register', async (req, res) => {
    try {
        console.log('Received registration request:', JSON.stringify(req.body, null, 2));
        const { username, email, password, confirmPassword } = req.body;

        // Validate required fields
        if (!username || !email || !password) {
            console.log('Missing required fields:', { username, email, password });
            return res.status(400).json({ 
                message: 'Please provide all required fields',
                errors: {
                    username: !username ? 'Username is required' : null,
                    email: !email ? 'Email is required' : null,
                    password: !password ? 'Password is required' : null
                }
            });
        }

        // Validate password match
        if (password !== confirmPassword) {
            console.log('Password mismatch');
            return res.status(400).json({ 
                message: 'Passwords do not match',
                errors: {
                    confirmPassword: 'Passwords do not match'
                }
            });
        }

        // Check if user exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            console.log('User already exists:', email);
            return res.status(400).json({ 
                message: 'User already exists',
                errors: {
                    email: 'Email is already registered'
                }
            });
        }

        // Create user
        console.log('Creating user with data:', { username, email });
        const user = await User.create({
            username: username.trim(),
            email: email.trim().toLowerCase(),
            password
        });

        if (user) {
            console.log('User created successfully:', JSON.stringify(user, null, 2));
            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id),
            });
        }
    } catch (error) {
        console.error('Registration error:', error);
        if (error.name === 'ValidationError') {
            const errors = {};
            Object.keys(error.errors).forEach(key => {
                errors[key] = error.errors[key].message;
            });
            console.log('Validation errors:', errors);
            return res.status(400).json({ 
                message: 'Validation Error',
                errors
            });
        }
        res.status(400).json({ message: error.message });
    }
});

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public
router.post('/login', async (req, res) => {
    try {
        console.log('Login attempt:', JSON.stringify(req.body, null, 2));
        const { email, password } = req.body;

        // Check for user email
        const user = await User.findOne({ email }).select('+password');

        if (user && (await user.matchPassword(password))) {
            console.log('Login successful for user:', user.email);
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            console.log('Login failed - Invalid credentials');
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(400).json({ message: error.message });
    }
});

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
router.get('/profile', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router; 