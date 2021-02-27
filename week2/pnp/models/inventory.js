const mongoose = require("mongoose")
const Schema = mongoose.Schema 

const Inventory = new Schema({

    category: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    inStock: Boolean,
    amountInStock: Number,
    price: Number
})

module.exports = mongoose.model("Inventory", Inventory)