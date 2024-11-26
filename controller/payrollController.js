const { default: mongoose } = require('mongoose')
const Payroll = require('../model/payrollModel')



const createPayroll = async (req, res) => {
     const {
          employee_id,
          name,
          department,
          start_date,
          end_date,
          monthly_rate,
          semi_monthly_rate,
          daily_rate,
          hourly_rate,
          minute_rate,
          days_worked,
          days_vl,
          days_sl,
          days_el,
          ot_hour_regular,
          ot_hour_restday,
          ot_hour_special,
          ot_hour_legal,
          ot_pay_regular,
          ot_pay_restday,
          ot_pay_special,
          ot_pay_legal,
          ot_pay_total,
          allowance,
          earnings_others,
          gross_pay,
          days_absence,
          absence_total,
          tardiness_min,
          tardiness_total,
          sss,
          philhealth,
          pagibig,
          wtax,
          lodging,
          water_electricity,
          hmo,
          share_capital,
          cash_advance,
          hhhc_savings,
          hhhc_membership_fee,
          deduction_others,
          total_deduction,
          net_pay
     } = req.body

     try {
          const payroll = await Payroll.create({
               employee_id,
               name,
               department,
               start_date,
               end_date,
               monthly_rate,
               semi_monthly_rate,
               daily_rate,
               hourly_rate,
               minute_rate,
               days_worked,
               days_vl,
               days_sl,
               days_el,
               ot_hour_regular,
               ot_hour_restday,
               ot_hour_special,
               ot_hour_legal,
               ot_pay_regular,
               ot_pay_restday,
               ot_pay_special,
               ot_pay_legal,
               ot_pay_total,
               allowance,
               earnings_others,
               gross_pay,
               days_absence,
               absence_total,
               tardiness_min,
               tardiness_total,
               sss,
               philhealth,
               pagibig,
               wtax,
               lodging,
               water_electricity,
               hmo,
               share_capital,
               cash_advance,
               hhhc_savings,
               hhhc_membership_fee,
               deduction_others,
               total_deduction,
               net_pay
          })
          res.status(200).json(payroll)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const getAllPayroll = async (req, res) => {
     try {
          const allPayroll = await Payroll.find({}).sort({ createdAt: -1 })

          res.status(200).json(allPayroll)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const getAllPayrollByDate = async (req, res) => {
     const { date } = req.params;

     try {
          const payroll = await Payroll.find({ date })
          //displaying response to user: single workout by ID from DB
          res.status(200).json(payroll)
     } catch (error) {
          res.status(400).json({ error: 'No payroll found' })
     }
}


module.exports = {
     createPayroll,
     getAllPayroll,
     getAllPayrollByDate
}