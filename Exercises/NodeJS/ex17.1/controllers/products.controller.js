const productModel = require('../models/product.model');

const createProduct = (req, res) => {
    // const data = req.body;
    const {name, category, isActive, details} = req.body;
    if (category < 0) {
        return res.json({"error": "no category"})
    }
    const product = new productModel({
        name: name,
        category: category,
        isActive: isActive,
        details: details
    });
    product.save((err) => {
        if (err) return res.json({"error": err});
        return res.json({"success": product});
    });
}

const getProductByName = (req, res)=> {
    return res.send('hey');
}

const getproducts = (req, res) => {
    productModel.find({}).then((products) => {
        return res.send(products)
    });
}

module.exports = {
    create: createProduct,
    getAll: getproducts,
    getProductByName: getProductByName,
}
