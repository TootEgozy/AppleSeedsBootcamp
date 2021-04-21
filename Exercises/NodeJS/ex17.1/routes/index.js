const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller');

// const functions = require('./functions');

router.get('/', (req, res)=> {
    productController.getAll(req, res);
}).post('/', (req, res)=> {
    productController.create(req, res);
})

router.get('/hey', (req,res)=> {
    productController.getProductByName(req, res);
})

router.get('/findByName', (req, res)=> {
    console.log("in /findByName");
    // productController.getProductByName(req, res);
    res.send('hey');
})


module.exports = router;