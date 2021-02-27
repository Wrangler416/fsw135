const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InventorySchema = new Schema({

    category: {
        type: String,
        required: true},

    item: {
        type: String,
        required: true},

    inStock: {type: Boolean},

    amountInStock: {type: Number},

    price: {type: Number}

})

module.exports = mongoose.model("Inventory", InventorySchema)

