const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
    required: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductModel'
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      }
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
    min: 1, 
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: 'Pending',
  }
});

const OrderModel = mongoose.model('orders', orderSchema);

module.exports = OrderModel;
