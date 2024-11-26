const mongoose = require('mongoose')

const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const productSchema = new Schema({
      product_code: {
            type: String,
            required: true
      },
      product_name: {
            type: String,
            required: true
      },
      product_description: {
            type: String,
            required: true
      },
      product_cost_price: {
            type: Number,
            required: true
      },
      product_selling_price: {
            type: Number,
            required: true
      },
      product_stock: {
            type: Number,
            required: true
      }
},
      {
            timestamps: true
      })


module.exports = mongoose.model('Product', productSchema)