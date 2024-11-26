const mongoose = require('mongoose')

const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const customerSchema = new Schema({
      customer_id: {
            type: String,
          
      },
      customer_name: {
            type: String,
          
      },
      customer_address: {
            type: String,
          
      },
      customer_contact: {
            type: String,
           
      },
      customer_email: {
            type: String,
          
      },
},
      {
            timestamps: true
      })


module.exports = mongoose.model('Customer', customerSchema)