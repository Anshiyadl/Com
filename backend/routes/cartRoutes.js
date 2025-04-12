const express = require('express');
const router = express.Router();
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart
} = require('../controllers/cartController');
const { protect } = require('../middlewares/auth');

// @desc    Get user's cart
// @route   GET /api/cart
// @access  Private
router.get('/', protect, getCart);

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
router.post('/', protect, addToCart);

// @desc    Update cart item quantity
// @route   PUT /api/cart/:itemId
// @access  Private
router.put('/:itemId', protect, updateCartItem);

// @desc    Remove item from cart
// @route   DELETE /api/cart/:itemId
// @access  Private
router.delete('/:itemId', protect, removeFromCart);

// @desc    Clear entire cart
// @route   DELETE /api/cart
// @access  Private
router.delete('/', protect, clearCart);

module.exports = router;