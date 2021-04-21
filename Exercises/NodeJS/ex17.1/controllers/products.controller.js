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
    //for some reason' this works but returns the error message... so i left the "then" syntax    
    // try {
    //     const search = req.body;
    //     await productModel.findOneAndDelete(search);
    //     return res.send('deleted! ' + product);
    // } 
    // catch (e) {
    //     return res.send("could not delete");
    // }

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

const getAllActives = async(req, res)=> {
    try {
        const products = await productModel.find({"isActive": "true"});
        return res.send(products)
    }
    catch(e) {
        return res.send("could not get users");
    }
}

const getPriceRange = async (req, res)=> {
     try {
        //$and: adress all the operators in the array
        //put all of the search queries in an array, in a json format,
        //we can search other queries then a price in the same array, for example:
        //all of the costumers named john age 18+ which are active.
         const products = await productModel.find({ $and: [{ "details.price": { $gte: 400 } }, { "details.price": { $lt: 500 } }] })
        return res.send(products)
     }
     catch(e) {
        return res.send("could not get products");
     }
}
module.exports = {
    create: createProduct,
    getAll: getproducts,
    getProductByProp: getProductByProp,
    deleteProductByProp: deleteProductByProp,
    getAllActives: getAllActives,
    getPriceRange: getPriceRange
}
