const mongoose = require('mongoose')

const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const memberSchema = new Schema({
      member_id: {
            type: String,
            required: true
      },
      firstname: {
            type: String,
            required: true
      },
      middlename: {
            type: String,
            required: false
      },
      lastname: {
            type: String,
            required: true
      },
      membership_date: {
            type: String,
            required: false
      },
      status: {
            type: String,
            required: false
      },
      contact_number: {
            type: String,
            required: false
      },
      email: {
            type: String,
            required: false
      },
      hhhc_membership_number: {
            type: String,
            required: false
      },
      bod_res: {
            type: String,
            required: false
      },
      coop_savings_account_number: {
            type: String,
            required: false
      },
      kaya_atm_card_number: {
            type: String,
            required: false
      },
      kaya_atm_savings_account_number: {
            type: String,
            required: false
      },
      mbh: {
            type: String,
            required: false
      },
      atm_passbook_fee: {
            type: String,
            required: false
      },
      atm_status: {
            type: String,
            required: false
      },
      pb_account_number: {
            type: String,
            required: false
      },
      pb_account_number_series: {
            type: String,
            required: false
      },
      passbook_series_number: {
            type: String,
            required: false
      },
      affiliation_org: {
            type: String,
            required: false
      },
      passbook_printed: {
            type: String,
            required: false
      },
      remarks: {
            type: String,
            required: false
      },
      notes: {
            type: String,
            required: false
      },





      tin: {
            type: String,
            required: false
      },
      coop_savings_passbook_number: {
            type: String,
            required: false
      },
      address: {
            type: String,
            required: false
      },
      dob: {
            type: String,
            required: false
      },
      age: {
            type: Number,
            required: false
      },
      gender: {
            type: String,
            required: false
      },
      civil_status: {
            type: String,
            required: false
      },
      highest_educational_attainment: {
            type: String,
            required: false
      },
      occupation: {
            type: String,
            required: false
      },
      number_of_dependents: {
            type: String,
            required: false
      },
      religion: {
            type: String,
            required: false
      },
      annual_income: {
            type: String,
            required: false
      },
      membership_type: {
            type: String,
            required: false
      },
      initial_share_capital: {
            type: String,
            required: false
      },
      initial_no_share: {
            type: String,
            required: false
      },
      special_savings_account: {
            type: String,
            required: false
      },
      impukan_certificate_account: {
            type: String,
            required: false
      },
      number_of_dependent: {
            type: String,
            required: false
      },
      pwd_type: {
            type: String,
            required: false
      },
      termination_date: {
            type: String,
            required: false
      },
      termination_bod: {
            type: String,
            required: false
      },
      housing_equity: {
            type: String,
            required: false
      },
      
      
},
      {
            timestamps: true
      })


module.exports = mongoose.model('Member', memberSchema)