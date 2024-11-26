const mongoose = require('mongoose')

const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const departmentSchema = new Schema({
      department_id: {
            type: String,
            required: true
      },
      department_name: {
            type: String,
            required: true
      },
      description: {
            type: String,
            required: false
      },
      other_info: {
            type: String,
            required: false
      }, 
},
      {
            timestamps: true
      })


module.exports = mongoose.model('Department', departmentSchema)