const express = require('express')
const orderrouter = express.Router()
const order = require('../models/order')

//add product
//methode post
// path: http://localhost:5000/product/addproduct

orderrouter.post('/', async (req, res) => {
  try {
    let newProduct = new order({ ...req.body })
    let result = await newProduct.save()
    res.send({ result, msg: 'sucefuly ordred' })
  } catch (error) {
    res.send({ msg: 'fail' })
    console.log(error)
  }
})

//delete product
//methode delete
// path: http://localhost:5000/product/id
orderrouter.delete('/:id', async (req, res) => {
  try {
    let result = await order.findOneAndRemove({
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
orderrouter.get('/:id', async (req, res) => {
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

orderrouter.get('/', async (req, res) => {
  try {
    let result = await order.find()
    res.send({ orders: result, msg: ' All order' })
  } catch (error) {
    console.log(error)
    res.send({ msg: 'fail' })
  }
})

module.exports = orderrouter
