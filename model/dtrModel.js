const mongoose = require('mongoose')

const Schema = mongoose.Schema
//defines the structures/model of the data in DB
const dtrSchema = new Schema({
      employee_id: {
            type: String,
            required: true
      },
      name: {
            type: String,
            required: true
      },
      date: {
            type: String,
            required: true
      },
      official_am_in_hour: {
            type: Number,
            required: false
      },
      official_am_in_min: {
            type: Number,
            required: false
      },
      official_pm_in_hour: {
            type: Number,
            required: false
      },
      official_pm_in_min: {
            type: Number,
            required: false
      },
      am_in_hour: {
            type: Number,
            required: true
      },
      am_in_min: {
            type: Number,
            required: true
      },
      am_out_hour: {
            type: Number,
            required: true
      },
      am_out_min: {
            type: Number,
            required: true
      },
      pm_in_hour: {
            type: Number,
            required: true
      },
      pm_in_min: {
            type: Number,
            required: true
      },
      pm_out_hour: {
            type: Number,
            required: true
      },
      pm_out_min: {
            type: Number,
            required: true
      },


      total_tardiness_min: {
            type: Number,
            required: false
      },
      total_undertime_min: {
            type: Number,
            required: false
      },
      leave_type: { //no
            type: String,
            required: false
      },
      absent_day: {
            type: Number,
            required: false
      }, 
      vl_day: {  //earnings #3
            type: Number,
            required: false
      },  
      sl_day: {  //earnings #4
            type: Number,
            required: false
      },
      el_day: {  //earnings #5
            type: Number,
            required: false
      },
      vl_nopay_day: {
            type: Number,
            required: false
      },
      sl_nopay_day: {
            type: Number,
            required: false
      },
      el_nopay_day: {
            type: Number,
            required: false
      },
      regular_ot_hours: {
            type: Number,
            required: false
      },
      restday_ot_hours: {
            type: Number,
            required: false
      },
      special_ot_hours: {
            type: Number,
            required: false
      },
      legal_ot_hours: {
            type: Number,
            required: false
      },
      day_type: {
            type: String,
            required: false
      },
      approve_ot: {
            type: String,
            required: false
      },
      approve_undertime: {
            type: String,
            required: false
      },
      approve_tardiness: {
            type: String,
            required: false
      },
      restday_counter: {  //earnings #1
            type: Number,
            required: false
      },
      working_day_counter: {  //earnings #2
            type: Number,
            required: false
      },
      restday_overtime_counter: {  //earnings #2
            type: Number,
            required: false
      },
      restday_nopay_day: {
            type: Number,
            required: false
      }

},

      {
            timestamps: true
      })
module.exports = mongoose.model('Dtr',dtrSchema)