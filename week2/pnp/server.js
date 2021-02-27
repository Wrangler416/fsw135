const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.use(express.json())

mongoose.connect("mongodb://localhost: 27017/Inventory",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
},
() => console.log("Connected to db now"))

app.use("/inventory", require("./routes/inventoryRouter"))
app.use("/search/category", require("./routes/inventoryRouter"))

app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: errMsg})
})

app.listen(8000, () => {
  console.log("The server is running on port 8000")
})