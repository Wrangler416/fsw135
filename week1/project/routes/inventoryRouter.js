const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory")

// Get All

inventoryRouter.get("/", (req, res, next) => {
  Inventory.find((err, allData) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(allData)
  })
})

// Post One
inventoryRouter.post("/", (req, res, next) => {
  const newItem = new Inventory(req.body)
  newItem.save((err, savedItem) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedItem)
  })
})

// Get by type

inventoryRouter.get("/search/category", (req, res, next) => {
 Inventory.find({category: req.query.category}, (err, allData) => {
   if(err) {
     res.status(500)
     return next(err)
   }
   return res.status(200).send(allData)
 })
})


// Delete One
inventoryRouter.delete("/:itemId", (req, res, next) => {
 Inventory.findOneAndDelete({_id: req.params.itemId}, (err, deletedItem) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send("successfully deleted item")
 })
})


// Update One
inventoryRouter.put("/:itemId", (req, res, next) => {
  Inventory.findOneAndUpdate(
    {_id: req.params.itemId}, 
    req.body, //update object with this data
    {new: true}, // send updated version only 
    (err, updatedItem) => {
      if(err) {
        res.status(500)
        return next(err)
      }
        return res.status(201).send(updatedItem)
    }
  )
})


module.exports = inventoryRouter