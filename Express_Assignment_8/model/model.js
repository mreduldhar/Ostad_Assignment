const mongoose = require('mongoose');

const {Schema} = mongoose;


const productsSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        price: {
            type: String,
            require: true
        },
        description: {
            type: String,
            default: "N/A"
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
    }, {timestamps: true, versionKey: false});


const Product = mongoose.model("ProductsCollections", productsSchema);

module.exports = Product;