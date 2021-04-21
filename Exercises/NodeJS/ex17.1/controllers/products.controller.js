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

const getProductByProp = (req, res)=> {
    const search = req.body;
    productModel.findOne(search)
    .then((product)=> {
        return res.send(product)
    })
    .catch((error)=> {
        return res.json({"error": "could not get product"});
    })
}

const deleteProductByProp = (req, res)=> {
    const search = req.body;
    productModel.findOneAndDelete(search)
        .then((product)=> {
            return res.send('deleted!' + product)
        })
        .catch(error => res.send(error))
}

const getproducts = (req, res) => {
    productModel.find({}).then((products) => {
        return res.send(products)
    });
}

const getAllActives = (req, res)=> {
    productModel.find({"isActive": "true"}).
    then((products)=> {
        return res.send(products)
    })
    .catch(error => res.send(error));
    // console.log(req.body);
    // return res.send({"works": "true"});
}

const getPriceRange = (req, res)=> {
    // const min = req.body.min;
    // const max = req.body.max;
    // const findArgs = {
    //     $gte:0,
    //     $lte:500
    // };

    //{details: {price: {$gte: 0}}}

    //$and: adress all the operators in the array
    //put all of the search queries in an array, in a json format,
    //we can search other queries then a price in the same array, for example:
    //all of the costumers named john age 18+ which are active.
        productModel.find({ $and: [{ "details.price": { $gte: 400 } }, { "details.price": { $lt: 500 } }] })
    .then((product)=> {
        console.log(product);
        return res.send(product)
    })
    .catch((error)=> {
        return res.send(error)
    })
}
module.exports = {
    create: createProduct,
    getAll: getproducts,
    getProductByProp: getProductByProp,
    deleteProductByProp: deleteProductByProp,
    getAllActives: getAllActives,
    getPriceRange: getPriceRange
}
