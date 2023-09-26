const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')
const subAdminController = require('../controllers/subAdminController')
const customerController = require('../controllers/customerController')
const cartController = require('../controllers/cartController')
const categoryController = require('../controllers/categoryController')
const orderController = require('../controllers/orderController')
const orderItemController = require('../controllers/orderItemController')
const paymentController = require('../controllers/paymentController')
const productController = require('../controllers/productController')
const postController = require('../controllers/postController')
const shipmentController = require('../controllers/shipmentController')
const userController = require('../controllers/userController')
const wishlistController = require('../controllers/wishlistController')



// admin
router.get('/admin/create', adminController.create)
router.get('/admin/read', adminController.read)
router.get('/admin/update', adminController.update)
router.get('/admin/delete', adminController.delete)

// subAdmin
router.get('/subAdmin/create', subAdminController.create)
router.get('/subAdmin/read', subAdminController.read)
router.get('/subAdmin/update', subAdminController.update)
router.get('/subAdmin/delete', subAdminController.delete)

// customer
router.get('/customer/create', customerController.create)
router.get('/customer/read', customerController.read)
router.get('/customer/update', customerController.update)
router.get('/customer/delete', customerController.delete)

// cart
router.get('/customer/create-car', cartController.create)
router.get('/customer/read-cart', cartController.read)
router.get('/customer/update-cart', cartController.update)
router.get('/customer/delete-cart', cartController.delete)

// category
router.get('/customer/create', categoryController.create)
router.get('/customer/read', categoryController.read)
router.get('/customer/update', categoryController.update)
router.get('/customer/delete', categoryController.delete)


// order
router.get('/customer/create-order', orderController.create)
router.get('/customer/read-order', orderController.read)
router.get('/customer/update-order', orderController.update)
router.get('/customer/delete-order', orderController.delete)

// order-item
router.get('/customer/create-order-item', orderItemController.create)
router.get('/customer/read-order-item', orderItemController.read)
router.get('/customer/update-order-item', orderItemController.update)
router.get('/customer/delete-order-item', orderItemController.delete)

// payment
router.get('/customer/payment/create', paymentController.create)
router.get('/customer/payment/read', paymentController.read)
router.get('/customer/payment/update', paymentController.update)
router.get('/customer/payment/delete', paymentController.delete)

// product
router.get('/admin/product/create', productController.create)
router.get('/admin/product/read', productController.read)
router.get('/admin/product/update', productController.update)
router.get('/admin/product/delete', productController.delete)

// post
router.get('/admin/post/create', postController.create)
router.get('/admin/post/read', postController.read)
router.get('/admin/post/update', postController.update)
router.get('/admin/post/delete', postController.delete)

// shipment
router.get('/shipment/create', shipmentController.create)
router.get('/shipment/read', shipmentController.read)
router.get('/shipment/update', shipmentController.update)
router.get('/shipment/delete', shipmentController.delete)

// user
router.get('/user/create', userController.create)
router.get('/user/read', userController.read)
router.get('/user/update', userController.update)
router.get('/user/delete', userController.delete)

// wishlist
router.get('/wishlist/create', wishlistController.create)
router.get('/wishlist/read', wishlistController.read)
router.get('/wishlist/update', wishlistController.update)
router.get('/wishlist/delete', wishlistController.delete)



module.exports = router;