const mongoose = require('mongoose')

const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const drawerSchema = new Schema({
      drawer_id: {
            type: String,
      },
      drawer_startdatetime: {
            type: String,
      },
      drawer_enddatetime: {
            type: String,
      },
      drawer_starting_cash: {
            type: Number,
      },
      drawer_sales: {
            type: Number,
      },
      drawer_expected_cash: {
            type: Number,
      },
      drawer_actual_cash: {
            type: Number,
      },
      drawer_status: {
            type: String,
      },
      
},
      {
            timestamps: true
      })


module.exports = mongoose.model('Drawer', drawerSchema)