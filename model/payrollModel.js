const mongoose = require('mongoose')

const Schema = mongoose.Schema
//defines the structures/model of the data in DB
const payrollSchema = new Schema({
      employee_id: {
            type: String,
            required: true
      },
      name: {
            type: String,
            required: true
      },
      department: {
            type: String,
            required: false
      },
      start_date: {
            type: String,
            required: true
      },
      end_date: {
            type: String,
            required: true
      },
      monthly_rate: {
            type: Number,
            required: true
      },
      semi_monthly_rate: {
            type: Number,
            required: true
      },
      daily_rate: {
            type: Number,
            required: true
      },
      hourly_rate: {
            type: Number,
            required: true
      },
      minute_rate: {
            type: Number,
            required: true
      },
      days_worked: {
            type: Number,
            required: true
      },
      days_vl: {
            type: Number,
            required: true
      },
      days_sl: {
            type: Number,
            required: true
      },
      days_el: {
            type: Number,
            required: true
      },
      ot_hour_regular: {
            type: Number,
            required: true
      },
      ot_hour_restday: {
            type: Number,
            required: true
      },
      ot_hour_special: {
            type: Number,
            required: true
      },
      ot_hour_legal: {
            type: Number,
            required: true
      },
      ot_pay_regular: {
            type: Number,
            required: true
      },
      ot_pay_restday: {
            type: Number,
            required: true
      },
      ot_pay_special: {
            type: Number,
            required: true
      },
      ot_pay_legal: {
            type: Number,
            required: true
      },
      ot_pay_total: {
            type: Number,
            required: true
      },
      allowance: {
            type: Number,
            required: true
      },
      earnings_others: {
            type: Number,
            required: true
      },
      gross_pay: {
            type: Number,
            required: true
      },
      days_absence: {
            type: Number,
            required: true
      },
      absence_total: {
            type: Number,
            required: true
      },
      tardiness_min: {
            type: Number,
            required: true
      },
      tardiness_total: {
            type: Number,
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
      pagibig: {
            type: Number,
            required: true
      },
      wtax: {
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
      cash_advance: {
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
      deduction_others: {
            type: Number,
            required: true
      },
      total_deduction: {
            type: Number,
            required: true
      },
      net_pay: {
            type: Number,
            required: true
      },
      
},

      {
            timestamps: true
      })
module.exports = mongoose.model('Payroll',payrollSchema)