const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        default: function() {
            return Math.floor(Math.random() * 1000000); // Random ID generation logic
        }
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Electronics', 'Fashion', 'Home', 'Sports', 'Other']
    },
    featured: {
        type: Boolean,
        default: false
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);