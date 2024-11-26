const mongoose = require('mongoose')

const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const savingsSchema = new Schema({
      member_id: {
            type: String,
            required: true
      },
      date: {
            type: String,
            required: false
      },
      particulars: {
            type: String,
            required: false
      },



      //membership
      membership_fee: {
            type: Number,
      },

      //share_capital
      share_capital_debit: {
            type: Number,
      },
      share_capital_credit: {
            type: Number,
      },
      share_capital_balance: {
            type: Number,
      },

      //coop_savings
      coop_savings_debit: {
            type: Number,
      },
      coop_savings_credit: {
            type: Number,
      },
      coop_savings_balance: {
            type: Number,
      },

      //special
      special_savings_debit: {
            type: Number,
      },
      special_savings_credit: {
            type: Number,
      },
      special_savings_balance: {
            type: Number,
      },

      //Kaya Savings
      kaya_savings_debit: {
            type: Number,
      },
      kaya_savings_credit: {
            type: Number,
      },
      kaya_savings_balance: {
            type: Number,
      },

      housing_savings_debit: {
            type: Number,
      },
      housing_savings_credit: {
            type: Number,
      },
      housing_savings_balance: {
            type: Number,
      },

      //karamay fund
      karamay_savings_debit: {
            type: Number,
      },
      karamay_savings_credit: {
            type: Number,
      },
      karamay_savings_balance: {
            type: Number,
      },

      //others fund
      others_debit: {
            type: Number,
      },
      others_credit: {
            type: Number,
      },
      others_balance: {
            type: Number,
      },
      reference_document: {
            type: String,
            required: false
      },
      remarks: {
            type: String,
            required: false
      },





},
      {
            timestamps: true
      })


module.exports = mongoose.model('Savings', savingsSchema)