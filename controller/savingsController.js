const { default: mongoose } = require('mongoose')
const Savings = require('../model/savingsModel')


/**CREATE NEW SAVINGS */
const createSavings = async (req, res) => {
      const {
            member_id,
            date,
            particulars,
            share_capital_debit,
            membership_fee,
            share_capital_credit,
            share_capital_balance,

            coop_savings_debit,
            coop_savings_credit,
            coop_savings_balance,

            special_savings_debit,
            special_savings_credit,
            special_savings_balance,

            kaya_savings_debit,
            kaya_savings_credit,
            kaya_savings_balance,

            housing_savings_debit,
            housing_savings_credit,
            housing_savings_balance,


            karamay_savings_debit,
            karamay_savings_credit,
            karamay_savings_balance,

            others_debit,
            others_credit,
            others_balance,
            reference_document,
            remarks

      } = req.body

      try {
            const savings = await Savings.create({
                  member_id,
                  date,
                  particulars,
                  share_capital_debit,
                  membership_fee,
                  share_capital_credit,
                  share_capital_balance,

                  coop_savings_debit,
                  coop_savings_credit,
                  coop_savings_balance,

                  special_savings_debit,
                  special_savings_credit,
                  special_savings_balance,

                  kaya_savings_debit,
                  kaya_savings_credit,
                  kaya_savings_balance,

                  housing_savings_debit,
                  housing_savings_credit,
                  housing_savings_balance,


                  karamay_savings_debit,
                  karamay_savings_credit,
                  karamay_savings_balance,

                  others_debit,
                  others_credit,
                  others_balance,
                  reference_document,
                  remarks
            })
            res.status(200).json(savings)
      } catch (error) {
            res.status(400).json({ error: error.message })
      }
}

const getAllSavings = async (req, res) => {
      try {
            /**Workout.find - finding al entries from DB
             * await Workout.find() will run immediately even
             * if the "workout" variable is not called yet
             */
            const allSavings = await Savings.find({}).sort({ createdAt: -1 })
            //displaying response to user: all workouts from DB
            res.status(200).json(allSavings)
      } catch (error) {
            res.status(400).json({ error: error.message })
      }
}

const getSingleSavings = async (req, res) => {
      const { member_id } = req.params;
      try {
            const savings = await Savings.find({ member_id: member_id })
            console.log(savings)
            //displaying response to user: single workout by ID from DB
            res.status(200).json(savings)
      } catch (error) {
            res.status(400).json({ error: 'No member found' })
      }
}


const updateSingleSavings = async (req, res) => {
      const { id } = req.params

      if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No Savings found' })
      }
      try {
            const singleSavings = await Savings.findOneAndUpdate({ _id: id }, {
                  ...req.body
            })

            //displaying response to user: deleted workout by ID from DB
            res.status(200).json(singleSavings)
      } catch (error) {
            res.status(400).json({ error: 'No Savings found' })
      }
}

const deleteSingleSavings = async (req, res) => {
      //id of the request parameter. Ex: xxx/delete/12e3289je3o2jtu2
      const { id } = req.params;

      //check if the id passed in parameter is valid id.
      if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No Savings found' })
      }
      try {
            //deleting an entry with the id in the parameter
            const singleSavings = await Savings.findOneAndDelete({ _id: id })

            //return a response which is the deleted one.
            res.status(200).json(singleSavings)
      } catch (error) {
            res.status(400).json({ error: 'No Savings found' })
      }
}

module.exports = {
      createSavings,
      getAllSavings,
      getSingleSavings,
      deleteSingleSavings,
      updateSingleSavings
}








