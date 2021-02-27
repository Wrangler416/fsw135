const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.use(express.json())

//Connect to Database 
mongoose.connect("mongodb://locahost:27017/Inventory", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
},
() => console.log("Connected to Database")
)

// Routes 
app.use("/inventory", require("./routes/inventoryRouter"))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})
  
// Server Connection //
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})

