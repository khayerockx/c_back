const { default: mongoose } = require('mongoose')
const Payslip = require('../model/payslipModel')


/**CREATE NEW EMPLOYEE */
const createPayslip = async (req, res) => {
     const {
          month,
          period,
          name,
          employee_id,
          base_salary,
          bi_monthly,
          daily,
          hourly,
          minute,
          basic_pay,
          allowance,
          ot_regular_amount,
          ot_restday_amount,
          ot_special_amount,
          ot_legal_amount,
          add_ot_restday_amount,
          add_ot_special_amount,
          add_ot_legal_amount,
          night_diff_amount,
          prior_period_adj_earnings,
          earnings_total,
          tardiness_amount,
          undertime_amount,
          restday_nopay_amount,
          absence_amount,
          vl_nopay_amount,
          sl_nopay_amount,
          el_nopay_amount,
          earning_deduction_total,
          sss,
          philhealth,
          hdmf,
          wtax,
          cash_advance_loans,
          hhhc_savings,
          hhhc_membership_fee,
          hmo,
          lodging,
          utilities,
          deduction_total,
          gross_pay,
          net_pay,
          share_capital,
          other_deduction,
          other_earnings,
          pay_adjustment_deduction
     } = req.body

     try {
          const payslip = await Payslip.create({
               month,
               period,
               name,
               employee_id,
               base_salary,
               bi_monthly,
               daily,
               hourly,
               minute,
               basic_pay,
               allowance,
               ot_regular_amount,
               ot_restday_amount,
               ot_special_amount,
               ot_legal_amount,
               add_ot_restday_amount,
               add_ot_special_amount,
               add_ot_legal_amount,
               night_diff_amount,
               prior_period_adj_earnings,
               earnings_total,
               tardiness_amount,
               undertime_amount,
               restday_nopay_amount,
               absence_amount,
               vl_nopay_amount,
               sl_nopay_amount,
               el_nopay_amount,
               earning_deduction_total,
               sss,
               philhealth,
               hdmf,
               wtax,
               cash_advance_loans,
               hhhc_savings,
               hhhc_membership_fee,
               hmo,
               lodging,
               utilities,
               deduction_total,
               gross_pay,
               net_pay,
               share_capital,
               other_deduction,
               other_earnings,
               pay_adjustment_deduction

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

     if (!mongoose.Types.ObjectId.isValid(id)) {
           return res.status(404).json({ error: 'No Payslip found' })
     }
     try {
           const payslip = await Payslip.findOneAndUpdate({ _id: id }, {
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