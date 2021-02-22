const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InventorySchema = new Schema({
    category: {
        type: String,
        required: true
    },
    item: {
        name: String,
        required: true
    },
    inStock: Boolean,
    amountInStock: Number,
    price: Number

})

module.exports = mongoose.model("Inventory", InventorySchema)

