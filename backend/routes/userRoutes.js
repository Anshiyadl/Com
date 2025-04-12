const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile
} = require('../controllers/userController');
const { protect } = require('../middlewares/auth');

// POST /api/users - Register user
router.post('/', registerUser);

// POST /api/users/login - Authenticate user
router.post('/login', loginUser);

// GET /api/users/profile - Get user profile (protected)
router.get('/profile', protect, getUserProfile);

module.exports = router;