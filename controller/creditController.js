const { default: mongoose } = require('mongoose')
const Credit = require('../model/creditModel')


/**CREATE NEW Product */
const createCredit = async (req, res) => {
     const {
         date,
         transaction_id,
         customer_id,
         amount
     } = req.body

     try {
          const credit = await Credit.create({
               date,
               transaction_id,
               customer_id,
               amount

          })
          res.status(200).json(credit)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const getAllCredit = async (req, res) => {
     try {
          /**Workout.find - finding al entries from DB
           * await Workout.find() will run immediately even
           * if the "workout" variable is not called yetpos
           */
          const allCredit = await Credit.find({}).sort({ createdAt: -1 })
          //displaying response to user: all workouts from DB
          res.status(200).json(allCredit)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}


const getSingleCustomer = async (req, res) => {
     const { customer_id } = req.params;
     try {
          const credit = await Credit.find({ customer_id })
          //displaying response to user: single workout by ID from DB
          res.status(200).json(credit)
     } catch (error) {
          res.status(400).json({ error: 'No credit found' })
     }
}


const getSingleCredit = async (req, res) => {
     const { transaction_id } = req.params;
     try {
          const credit = await Credit.find({ transaction_id })
          console.log(credit)
          //displaying response to user: single workout by ID from DB
          res.status(200).json(credit)
     } catch (error) {
          res.status(400).json({ error: 'No credit found' })
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

const deleteSingleCredit = async (req, res) => {
     //id of the request parameter. Ex: xxx/delete/12e3289je3o2jtu2
     const { id } = req.params;

     //check if the id passed in parameter is valid id.
     if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({ error: 'No Credit found' })
     }
     try {
          //deleting an entry with the id in the parameter
          const singleCredit = await Credit.findOneAndDelete({ _id: id })

          //return a response which is the deleted one.
          res.status(200).json(singleCredit)
     } catch (error) {
          res.status(400).json({ error: 'No credit found' })
     }
}

module.exports = {
     createCredit,
     getAllCredit,
     getSingleCredit,
     deleteSingleCredit,
     getSingleCustomer
}