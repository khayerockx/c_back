const { default: mongoose } = require('mongoose')
const Payslip = require('../model/payslipModel')


/**CREATE NEW EMPLOYEE */
const createPayslip = async (req, res) => {
     const {
          approval_status,
          month,
          period,
          employee_id,
          net,
          department,
          name,
          year
          
     } = req.body

     try {
          const payslip = await Payslip.create({
               approval_status,
               month,
               period,
               employee_id,
               net,
               department,
               name,
               year
               
          })
          res.status(200).json(payslip)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}


const getSinglePayslip = async (req, res) => {
     const { id } = req.params;

     try {
          const singlePayslip = await Payslip.findOne({ employee_id: `${id}` }).exec();
          //displaying response to user: single workout by ID from DB
          res.status(200).json(singlePayslip)
     } catch (error) {
          res.status(400).json({ error: 'No employee found' })
     }
}

const getAllPayslip = async (req, res) => {
     try {
          /**Workout.find - finding al entries from DB
           * await Workout.find() will run immediately even
           * if the "workout" variable is not called yet
           */
          const allPayslip = await Payslip.find({}).sort({ createdAt: -1 })
          //displaying response to user: all workouts from DB
          res.status(200).json(allPayslip)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const deleteSinglePayslip = async (req, res) => {
     //id of the request parameter. Ex: xxx/delete/12e3289je3o2jtu2
     const { id } = req.params;

     //check if the id passed in parameter is valid id.
     if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({ error: 'No employee found' })
     }
     try {
          //deleting an entry with the id in the parameter
          const singlePayslip = await Payslip.findOneAndDelete({ _id: id })

          //return a response which is the deleted one.
          res.status(200).json(singlePayslip)
     } catch (error) {
          res.status(400).json({ error: 'No employee found' })
     }
}

const updateSinglePayslip = async (req, res) => {
     const { id } = req.params

     try {
           const payslip = await Payslip.findOneAndUpdate({ employee_id:  `${id}` }, {
                 ...req.body
           })

           //displaying response to user: deleted workout by ID from DB
           res.status(200).json(payslip)
     } catch (error) {
           res.status(400).json({ error: 'No Department found' })
     }
}




module.exports = {
     createPayslip,
     getSinglePayslip,
     deleteSinglePayslip,
     getAllPayslip,
     updateSinglePayslip
}