const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

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
      this.password = hashedPassword; // Replace the plain password with the hashed one
      next();
    } catch (error) {
      return next(error);
    }
  });

 const UserModel = mongoose.model('users', userSchema);

 module.exports = UserModel;