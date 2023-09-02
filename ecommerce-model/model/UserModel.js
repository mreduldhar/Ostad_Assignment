const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const CartItemModel = require('./CartItemModel');
const OrderModel = require('./OrderModel');

const userSchema = new mongoose.Schema({

    firstName: { 
        type: String,
        required: true
    },
    lastName: { 
        type: String, 
        required: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true
    },
    password: { 
        type: String, 
        required: true
    },
    address: { 
        type: String
    },
    phoneNumber: { 
        type: String
    },
    cartItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CartItemModel',
      },
    ],
  
    
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderModel',
      },
    ]

    },
    {timestamps:true,versionKey:false}
 )



 //pre-save middleware to hash the password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next(); 
    }
  
    try {
      const salt = await bcrypt.genSalt(10); 
      const hashedPassword = await bcrypt.hash(this.password, salt); // Hash the password
      this.password = hashedPassword; 
      next();
    } catch (error) {
      return next(error);
    }
  });

  // Set up a middleware to remove user's cart items and orders when the user is deleted
userSchema.pre('remove', async function (next) {
  await CartItemModel.deleteMany({ user: this._id });
  await OrderModel.deleteMany({ user: this._id });
  next();
});

 const UserModel = mongoose.model('users', userSchema);

 module.exports = UserModel;