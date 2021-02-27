const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory")

//Get All 
inventoryRouter.get("/", (req, res, next) => {
  Inventory.find((err, allData) => {
    if(err) {
      console.log(err)
      res.status(500)
      return next(err)
    }
    return res.status(200).send(allData)
  })
})

//Get One 
inventoryRouter.get('/:itemId', (req, res, next) => {
  Inventory.findById( {_id: req.params.itemId}, (err, item) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(item)
  })
})
//Post One
inventoryRouter.post("/", (req, res, next) => {
  const newItem = new Inventory(req.body)
  newItem.save((err, savedItem) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedItem)
  })
})
// Delete One
inventoryRouter.delete('/:itemId', (req, res, next) => {
  Inventory.findOneAndDelete( {_id: req.params.itemId}, (err, deletedItem) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send("You deleted the item")
  })
})

module.exports = inventoryRouter