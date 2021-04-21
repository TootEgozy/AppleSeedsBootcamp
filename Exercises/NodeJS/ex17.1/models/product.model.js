const mongoose = require('mongoose');

//the mongoose.model & mongoose.schema are like object prototypes.
//when we create a new modal / schema we create an object
//from this prototype.
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    details: {
        price: {
            type: Number,
            required: false
        }
    }
})

const productmodal  = mongoose.model('products',productSchema);
module.exports= productmodal;
