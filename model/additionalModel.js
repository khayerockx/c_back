const mongoose = require('mongoose')

const Schema = mongoose.Schema
//defines the structures/model of the data in DB
const additionalSchema = new Schema({
      date_covered: {
            type: String,
            required: true
      },
      name: {
            type: String,
            required: true
      },
      employee_id: {
            type: String,
            required: true
      },
      sss: {
            type: Number,
            required: true
      },
      philhealth: {
            type: Number,
            required: true
      },
      wtax: {
            type: Number,
            required: true
      },
      pagibig: {
            type: Number,
            required: true
      },
      lodging: {
            type: Number,
            required: true
      },
      water_electricity: {
            type: Number,
            required: true
      },
      hmo: {
            type: Number,
            required: true
      },
      share_capital: {
            type: Number,
            required: true
      },
      hhhc_savings: {
            type: Number,
            required: true
      },
      hhhc_membership_fee: {
            type: Number,
            required: true
      },
      cash_advances: {
            type: Number,
            required: true
      },
      pay_adjustment_deduction: {
            type: Number,
            required: true
      },
      other_deduction: {
            type: Number,
            required: true
      },
      total_deduction: {
            type: Number,
            required: true
      },
      allowance: {
            type: Number,
            required: true
      },
      pay_adjustment_earnings: {
            type: Number,
            required: true
      },
      other_earnings: {
            type: Number,
            required: true
      },
      total_earnings: {
            type: Number,
            required: true
      }
},
      {
            timestamps: true
      })
module.exports = mongoose.model('Additional', additionalSchema)