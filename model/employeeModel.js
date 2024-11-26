const mongoose = require('mongoose')

const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const employeeSchema = new Schema({
      employee_id: {
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
      age: {
            type: String,
      },
      birthday: {
            type: String,
      },
      address: {
            type: String,
      },
      email: {
            type: String,
            required: false
      },
      contact_number: {
            type: Number,
            required: false
      },
      incase_of_emergency: {
            type: String,
            required: false
      },
      job_title: {
            type: String,
      },
      base_salary: {
            type: Number,
            required: true
      },
      bimonthly_salary: {
            type: Number,
      },
      daily_salary: {
            type: Number,
      },
      hourly_salary: {
            type: Number,
      },
      minute_salary: {
            type: Number,
      },
      start_date: {
            type: String,
      },
      end_date: {
            type: String,
            required: false
      },
      contract: {
            type: String,
      },
      department: {
            type: String,
      },
      is_active: {
            type: Boolean,
            required: false
      },
      sss: {
            type: String,
            required: false
      },
      pagibig: {
            type: String,
            required: false
      },
      tin: {
            type: String,
            required: false
      },
      philhealth: {
            type: String,
            required: false
      },
      bank_name: {
            type: String,
            required: false
      },
      bank_account_number: {
            type: String,
            required: false
      },
      sick_leave: {
            type: Number,
      },
      vacation_leave: {
            type: Number,
      },
      emergency_leave: {
            type: Number,
      },
      username: {
            type: String,
            required: false
      },
      password: {
            type: String,
            required: false
      },
      regular_ot: {
            type: Number,
            required: false
      },
      restday_ot: {
            type: Number,
            required: false
      },
      special_ot: {
            type: Number,
            required: false
      },
      legal_ot: {
            type: Number,
            required: false
      },
      restday_first_eight_ot: {
            type: Number,
            required: false
      },
      special_first_eight_ot: {
            type: Number,
            required: false
      },
      legal_first_eight_ot: {
            type: Number,
            required: false
      },
      employment_status: {
            type: String,
            required: false
      },
},

      {
            timestamps: true
      })


module.exports = mongoose.model('Employee', employeeSchema)