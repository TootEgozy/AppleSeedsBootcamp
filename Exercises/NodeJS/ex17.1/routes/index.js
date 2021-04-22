const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller');

// const functions = require('./functions');

router.get('/', (req, res)=> {
    productController.getAll(req, res);
}).post('/', (req, res)=> {
    productController.create(req, res);
})

router.get('/findByProp', (req, res)=> {
    productController.getProductByProp(req, res);
})

router.delete('/deleteProduct', (req, res)=> {
    productController.deleteProductByProp(req, res);
})

router.get('/getActive', (req, res)=> {
    productController.getAllActives(req,res);
})

router.get('/getByPriceRange', (req, res)=> {
    productController.getPriceRange(req, res);
})

router.put('/updateProduct/:id', (req, res)=> {
    productController.updateProduct(req, res);
})

router.delete('/deleteProduct/:id', (req, res)=> {
    productController.deleteProduct(req, res);
})


module.exports = router;