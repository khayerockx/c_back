const mongoose = require('mongoose')

const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const payslipSchema = new Schema({
      employee_id: {
            type: String,
            required: true
      },
      month: {
            type: String
      },
      period: {
            type: String
      },
      name: {
            type: String
      },
      base_salary: {
            type: Number
      },
      bi_monthly: {
            type: Number
      },
      daily: {
            type: Number
      },
      hourly: {
            type: Number
      },
      minute: {
            type: Number
      },

      basic_pay: {
            type: Number
      },
      allowance: {
            type: Number
      },
    
      ot_regular_amount: {
            type: Number
      },
     
      ot_restday_amount: {
            type: Number
      },
    
      ot_special_amount: {
            type: Number
      },
    
      ot_legal_amount: {
            type: Number
      },
    
      add_ot_restday_amount: {
            type: Number
      },
      
      add_ot_special_amount: {
            type: Number
      },
     
      add_ot_legal_amount: {
            type: Number
      },
     
      night_diff_amount: {
            type: Number
      },
      prior_period_adj_earnings: {
            type: Number
      },

      
      earnings_total: {
            type: Number
      },



      
      tardiness_amount: {
            type: Number
      },
     
      undertime_amount: {
            type: Number
      },
      
      restday_nopay_amount: {
            type: Number
      },
      
      absence_amount: {
            type: Number
      },
      
      vl_nopay_amount: {
            type: Number
      },
      
      sl_nopay_amount: {
            type: Number
      },
    
      el_nopay_amount: {
            type: Number
      },

      earning_deduction_total: {
            type: Number
      },
      



      sss: {
            type: Number
      },
      philhealth: {
            type: Number
      },
      hdmf: {
            type: Number
      },
      wtax: {
            type: Number
      },
      cash_advance_loans: {
            type: Number
      },
      hhhc_savings: {
            type: Number
      },
      hhhc_membership_fee: {
            type: Number
      },
      hmo: {
            type: Number
      },
      lodging: {
            type: Number
      },
      utilities: {
            type: Number
      },
      deduction_total: {
            type: Number
      },
      gross_pay: {
            type: Number
      },
      net_pay: {
            type: Number
      },

      pay_adjustment_deduction: {
            type: Number
      },
      other_deduction: {
            type: Number
      },
      other_earnings: {
            type: Number
      },

      share_capital: {
            type: Number
      },

},

      {
            timestamps: true
      })


module.exports = mongoose.model('Payslip', payslipSchema)