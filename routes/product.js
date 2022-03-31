const express = require('express')
const Productrouter = express.Router()
const product = require('../models/product')

//add product
//methode post
// path: http://localhost:5000/product/addproduct

Productrouter.post('/addproduct', async (req, res) => {
  try {
    let newProduct = new product({ ...req.body })
    let result = await newProduct.save()
    res.send({ result, msg: 'sucefuly aded' })
  } catch (error) {
    res.send({ msg: 'fail' })
    console.log(error)
  }
})

//delete product
//methode delete
// path: http://localhost:5000/product/id
Productrouter.delete('/:id', async (req, res) => {
  try {
    let result = await product.findOneAndRemove({
      _id: req.params.id,
    })
    res.send({ msg: ' delete ' })
  } catch (error) {
    console.log(error)
    res.send({ msg: 'fail' })
  }
})

//get product
//methode get
//path http://localhost:5000/product/id
Productrouter.get('/:id', async (req, res) => {
  try {
    const id = req.params
    let result = await product.findOne({ _id: req.params.id })
    res.send({ result, msg: ' ONE contact' })
  } catch (error) {
    console.log(error)
    res.send({ msg: 'fail' })
  }
})

// //getall product
// //methode get
// //path http://localhost:5000/product/

Productrouter.get('/', async (req, res) => {
  try {
    let result = await product.find()
    res.send({ result, msg: ' All contact' })
  } catch (error) {
    console.log(error)
    res.send({ msg: 'fail' })
  }
})

// //update product
// //methode put
// //path http://localhost:5000/product/id

Productrouter.put('/:id', async (req, res) => {
  try {
    let result = await product.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: { ...req.body } }
    )
    res.send({ result, msg: ' one product' })
  } catch (error) {
    console.log(error)
    res.send({ msg: 'fail' })
  }
})

module.exports = Productrouter
