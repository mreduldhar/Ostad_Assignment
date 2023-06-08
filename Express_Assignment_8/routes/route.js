const express = require('express');

const router = express.Router();

const {createProduct, getProducts} = require('../controller/controller');

const {authenticate} = require('../middleware/tokenVerify');


router.get("/login", login);

router.get("/products", authenticate, getProducts);

router.post("/create-product", authenticate, createProduct)


module.exports = router;