const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/db-methods", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true 
},
() => console.log("Connected to Database")
)

app.use("/books", require("./routes/bookRouter"))
app.use("/authors", require("./routes/authorRouter"))

app.listen(9000, () => {
    console.log("server is now running on port 9000")
})

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


