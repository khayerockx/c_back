const { default: mongoose } = require('mongoose')
const Additional = require('../model/additionalModel')



const createAdditional = async (req, res) => {
     const {
          date_covered,
          employee_id,
          name,
          sss,
          philhealth,
          wtax,
          pagibig,
          lodging,
          water_electricity,
          hmo,
          share_capital,
          hhhc_savings,
          hhhc_membership_fee,
          cash_advances,
          pay_adjustment_deduction,
          other_deduction,
          total_deduction,
          allowance,
          pay_adjustment_earnings,
          other_earnings,
          total_earnings
     } = req.body

     try {
          const additional = await Additional.create({
               date_covered,
               employee_id,
               name,
               sss,
               philhealth,
               wtax,
               pagibig,
               lodging,
               water_electricity,
               hmo,
               share_capital,
               hhhc_savings,
               hhhc_membership_fee,
               cash_advances,
               pay_adjustment_deduction,
               other_deduction,
               total_deduction,
               allowance,
               pay_adjustment_earnings,
               other_earnings,
               total_earnings
          })
          res.status(200).json(additional)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}
const updateSingleAdditional = async (req, res) => {
     const { id } = req.params

     if (!mongoose.Types.ObjectId.isValid(id)) {
           return res.status(404).json({ error: 'No Additional found' })
     }
     try {
           const singleAdditional = await Additional.findOneAndUpdate({ _id: id }, {
                 ...req.body
           })

           //displaying response to user: deleted workout by ID from DB
           res.status(200).json(singleAdditional)
     } catch (error) {
           res.status(400).json({ error: 'No Additional found' })
     }
}

const getAllAdditionalByDate = async (req, res) => {
     const { id } = req.params;

     try {
          const additional = await Additional.find({ date })
          //displaying response to user: single workout by ID from DB
          res.status(200).json(additional)
     } catch (error) {
          res.status(400).json({ error: 'No additional found' })
     }
}
const getAllAdditional = async (req, res) => {
     try {
          const allAddtional = await Additional.find({}).sort({ createdAt: -1 })

          res.status(200).json(allAddtional)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}
const getAdditionalById = async (req, res) => {
     const { employee_id } = req.params;

     try {
          const additional = await Additional.find({ employee_id })
          res.status(200).json(additional)
     } catch (error) {
          res.status(400).json({ error: 'No dtr found' })
     }
}
const deleteSingleAdditional = async (req, res) => {
     //id of the request parameter. Ex: xxx/delete/12e3289je3o2jtu2
     const { id } = req.params;

     //check if the id passed in parameter is valid id.
     if (!mongoose.Types.ObjectId.isValid(id)) {
           return res.status(404).json({ error: 'No Additional found' })
     }
     try {
           //deleting an entry with the id in the parameter
           const add = await Additional.findOneAndDelete({ _id: id })

           //return a response which is the deleted one.
           res.status(200).json(add)
     } catch (error) {
           res.status(400).json({ error: 'No Additional found' })
     }
}

module.exports = {
     createAdditional,
     getAdditionalById,
     getAllAdditionalByDate,
     getAllAdditional,
     deleteSingleAdditional,
     updateSingleAdditional
}