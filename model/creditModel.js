const mongoose = require('mongoose')

const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const creditSchema = new Schema({
      date: {
            type: String,
            required: true
      },
      transaction_id: {
            type: String,
            required: true
      },
      customer_id: {
            type: String,
      },
      amount: {
            type: Number,
      }
     
},
      {
            timestamps: true
      })


module.exports = mongoose.model('Credit', creditSchema)