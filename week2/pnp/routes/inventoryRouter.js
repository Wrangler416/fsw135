const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory")
 
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

inventoryRouter.get("/search/category", (req, res, next) => {
  Inventory.find( {category: req.query.category}, (err, allData) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(allData)
  })
})

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