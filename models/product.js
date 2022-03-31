const mongoose = require('mongoose')
const schema = mongoose.Schema
const ProductSchema = new schema({
  name: {
    type: String,
    require: true,
  },
  image: {},

  prix: {
    type: String,
    // require: true,
  },
  category: {
    type: String,
    // require: true,
  },

  description: {
    type: String,
    // require: true,
  },
  quantite: {
    type: String,
    // require: true,
  },
  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "user",
  //   required: true,
  // },
})
module.exports = mongoose.model('product', ProductSchema)
