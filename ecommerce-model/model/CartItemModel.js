const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel', // Reference to the User model
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductModel', // Reference to the Product model
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
});


const CartItemModel = mongoose.model('cartItems', cartItemSchema);

module.exports = CartItemModel;
