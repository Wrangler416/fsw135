const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")

app.use(morgan("dev"))
app.use(express.json())

//Connect to Database 
mongoose.connect("mongodb://locahost:27017/Inventory", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("Connected to Database")
)

// Routes 
app.use("/inventory", require("./inventoryRouter"))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})
  
// Server Connection //
app.listen(7000, () => {
    console.log("The server is running on Port 7000")
})