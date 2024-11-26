const { default: mongoose } = require('mongoose')
const Pos = require('../model/posModel')


/**CREATE NEW Product */
const createPos = async (req, res) => {
     const {
          pos_date,
          pos_transaction_id,
          pos_items,
          pos_cost_total,
          pos_total,
          pos_drawer_id,
          pos_user,
          pos_customer_id,
          pos_customer_name,
          pos_cash,
          pos_change,
          pos_discount,
          pos_credit_sales,
          pos_cash_sales,
          pos_discounted_amount

     } = req.body

     try {
          const pos = await Pos.create({
               pos_date,
               pos_transaction_id,
               pos_items,
               pos_cost_total,
               pos_total,
               pos_drawer_id,
               pos_user,
               pos_customer_id,
               pos_customer_name,
               pos_cash,
               pos_change,
               pos_discount,
               pos_credit_sales,
               pos_cash_sales,
               pos_discounted_amount

          })
          res.status(200).json(pos)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const getAllPos = async (req, res) => {
     try {
          /**Workout.find - finding al entries from DB
           * await Workout.find() will run immediately even
           * if the "workout" variable is not called yetpos
           */
          const allPos = await Pos.find({}).sort({ createdAt: -1 })
          //displaying response to user: all workouts from DB
          res.status(200).json(allPos)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const getSinglePos = async (req, res) => {
     const { transaction_id } = req.params;
     try {
          const pos = await Pos.find({ transaction_id })
          console.log(pos)
          //displaying response to user: single workout by ID from DB
          res.status(200).json(pos)
     } catch (error) {
          res.status(400).json({ error: 'No pos found' })
     }
}


// const updateSingleProduct = async (req, res) => {
//      const { id } = req.params

//      if (!mongoose.Types.ObjectId.isValid(id)) {
//           return res.status(404).json({ error: 'No Product found' })
//      }
//      try {
//           const singleProduct = await Product.findOneAndUpdate({ _id: id }, {
//                ...req.body
//           })

//           //displaying response to user: deleted workout by ID from DB
//           res.status(200).json(singleProduct)
//      } catch (error) {
//           res.status(400).json({ error: 'No Product found' })
//      }
// }

const deleteSinglePos = async (req, res) => {
     //id of the request parameter. Ex: xxx/delete/12e3289je3o2jtu2
     const { id } = req.params;

     //check if the id passed in parameter is valid id.
     if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({ error: 'No Pos found' })
     }
     try {
          //deleting an entry with the id in the parameter
          const singlePos = await Pos.findOneAndDelete({ _id: id })

          //return a response which is the deleted one.
          res.status(200).json(singlePos)
     } catch (error) {
          res.status(400).json({ error: 'No pos found' })
     }
}

module.exports = {
     createPos,
     getAllPos,
     getSinglePos,
     deleteSinglePos
}