const mongoose = require('mongoose')

const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const leavesSchema = new Schema({
      employee_id: {
            type: String,
            required: true
      },
      employee_fullname: {
            type: String,
            required: true
      },
      leave_type: {
            type: String,
            required: true
      },
      date: {
            type: String,
            required: false
      },
      duration: {
            type: String,
            required: true
      },
      status: {
            type: String,
            required: true
      },
      approver: {
            type: String,
            required: false
      }
},
      {
            timestamps: true
      })


module.exports = mongoose.model('Leaves', leavesSchema)