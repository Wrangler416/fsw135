const express = require("express")
const bookRouter = express.Router()
const Book = require("../models/book")

// get all 

bookRouter.get("/", (req, res, next) => {
    Book.find((err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})
//get by author 

bookRouter.get("/:authorID", (req, res, next) => {
    Book.find({ author: req.params.authorID }, (err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})


//add new book 

bookRouter.post("/:authorID", (req, res, next) => {
    req.body.author = req.params.authorID
    const newBook = new Book(req.body)
    newBook.save((err, savedBook) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})

module.exports = bookRouter
