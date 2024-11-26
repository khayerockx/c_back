const { default: mongoose } = require('mongoose')
const Employee = require('../model/employeeModel')


/**CREATE NEW EMPLOYEE */
const createEmployee = async (req, res) => {
     const {
          employee_id,
          firstname,
          middlename,
          lastname,
          age,
          birthday,
          address,
          email,
          contact_number,
          incase_of_emergency,
          job_title,
          base_salary,
          bimonthly_salary,
          daily_salary,
          hourly_salary,
          minute_salary,
          start_date,
          end_date,
          contract,
          department,
          is_active,
          sss,
          pagibig,
          tin,
          philhealth,
          bank_name,
          bank_account_number,
          sick_leave,
          vacation_leave,
          emergency_leave,

          username,
          password,
          regular_ot,
          restday_ot,
          special_ot,
          legal_ot,

          restday_first_eight_ot,
          special_first_eight_ot,
          legal_first_eight_ot,

          employment_status
          

     } = req.body

     try {
          const employee = await Employee.create({
               employee_id,
               firstname,
               middlename,
               lastname,
               age,
               birthday,
               address,
               email,
               contact_number,
               incase_of_emergency,
               job_title,
               base_salary,
               bimonthly_salary,
               daily_salary,
               hourly_salary,
               minute_salary,
               start_date,
               end_date,
               contract,
               department,
               is_active,
               sss,
               pagibig,
               tin,
               philhealth,
               bank_name,
               bank_account_number,
               sick_leave,
               vacation_leave,
               emergency_leave,
               username,
               password,
               regular_ot,
               restday_ot,
               special_ot,
               legal_ot,

               restday_first_eight_ot,
               special_first_eight_ot,
               legal_first_eight_ot,

               employment_status

          })
          res.status(200).json(employee)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const getAllEmployees = async (req, res) => {
     try {
          /**Workout.find - finding al entries from DB
           * await Workout.find() will run immediately even
           * if the "workout" variable is not called yet
           */
          const allEmployees = await Employee.find({}).sort({ createdAt: -1 })
          //displaying response to user: all workouts from DB
          res.status(200).json(allEmployees)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const getSingleEmployee = async (req, res) => {
     const { id } = req.params;

     //check if the id passed in parameter is valid id.
     // if (!mongoose.Types.ObjectId.isValid(id)) {
     //      return res.status(404).json({ error: 'No employee found' })
     // }

     try {
          const singleEmployee = await Employee.findOne({ employee_id: `${id}` }).exec();
          //displaying response to user: single workout by ID from DB
          res.status(200).json(singleEmployee)
     } catch (error) {
          res.status(400).json({ error: 'No employee found' })
     }
}

const deleteSingleEmployee = async (req, res) => {
     //id of the request parameter. Ex: xxx/delete/12e3289je3o2jtu2
     const { id } = req.params;

     //check if the id passed in parameter is valid id.
     if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({ error: 'No employee found' })
     }
     try {
          //deleting an entry with the id in the parameter
          const singleEmployee = await Employee.findOneAndDelete({ _id: id })

          //return a response which is the deleted one.
          res.status(200).json(singleEmployee)
     } catch (error) {
          res.status(400).json({ error: 'No employee found' })
     }
}

const updateSingleEmployee = async (req, res) => {
     const { id } = req.params

     if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({ error: 'No employee found' })
     }
     try {
          const singleEmployee = await Employee.findOneAndUpdate({ _id: id }, {
               ...req.body
          })

          //displaying response to user: deleted workout by ID from DB
          res.status(200).json(singleEmployee)
     } catch (error) {
          res.status(400).json({ error: 'No employee found' })
     }
}

const updateSingleEmployeeLeave = async (req, res) => {
     const { id } = req.params;

     try {
          const singleEmployeeLeave = await Employee.findOneAndUpdate({ employee_id: `${id}` }, {
               ...req.body
          })
          //displaying response to user: single workout by ID from DB
          res.status(200).json(singleEmployeeLeave)
     } catch (error) {
          res.status(400).json({ error: 'No employee found' })
     }
}


module.exports = {
     createEmployee,
     getAllEmployees,
     getSingleEmployee,
     deleteSingleEmployee,
     updateSingleEmployee,
     updateSingleEmployeeLeave
}