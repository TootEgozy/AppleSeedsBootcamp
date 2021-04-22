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

const updateProduct = async(req, res) => {
    try {
        //find the user by the url id, change params in the user with the request body (can only update fileds in the user,
        //not create new ones like this), run all the model validators for this, and create a new user from the data to replace the old one.
        const product = await productModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        
        //no product found in the id's search
        if(!product) {
            return res.status(404).send("no product found with id of "+req.params.id);
        }

        //success
        return res.send(product);
    }
    catch(e) {
        //could not update due to validation error
        return res.status(400).send(e);
    }
} 

const deleteProduct = async(req, res)=> {
    try {
        const product = await productModel.findByIdAndDelete(req.params.id);
        if(!product) {
            return res.status(404).send("no product found with id of "+req.params.id);
        }
        return res.send(product);
    }
    catch(e) {
        return res.send(e)
    }

}

module.exports = {
    create: createProduct,
    getAll: getproducts,
    getProductByProp: getProductByProp,
    deleteProductByProp: deleteProductByProp,
    getAllActives: getAllActives,
    getPriceRange: getPriceRange,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct
}
