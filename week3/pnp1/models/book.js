const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    likes: {
        type: Number,
        default: 0
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author", 
        required: true
    }
})

module.exports = mongoose.model("Book", bookSchema)