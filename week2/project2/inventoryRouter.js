const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require("./inventory")
const mongoose = require("mongoose")
console.log(mongoose.model("Inventory"))

// Get All
inventoryRouter.get("/", (req, res, next) => {
    console.log("testing")
    mongoose.model("Inventory").find((err, allData) => {
      console.log(allData)
    if(err){
        console.log(err)
      res.status(500)
      return next(err)
    }
    console.log(allData)
    return res.status(200).send(allData)
  })
})

module.exports = inventoryRouter