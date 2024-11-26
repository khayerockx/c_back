const { default: mongoose } = require('mongoose')
const Customer = require('../model/customerModel')


/**CREATE NEW Customer */
const createCustomer = async (req, res) => {
      const {
            customer_id,
            customer_name,
            customer_address,
            customer_contact,
            customer_email
      } = req.body

      try {
            const customer = await Customer.create({
                  customer_id,
                  customer_name,
                  customer_address,
                  customer_contact,
                  customer_email
            })
            res.status(200).json(customer)
      } catch (error) {
            res.status(400).json({ error: error.message })
      }
}

const getAllCustomer = async (req, res) => {
      try {
            /**Workout.find - finding al entries from DB
             * await Workout.find() will run immediately even
             * if the "workout" variable is not called yet
             */
            const allCustomer = await Customer.find({}).sort({ createdAt: -1 })
            //displaying response to user: all workouts from DB
            res.status(200).json(allCustomer)
      } catch (error) {
            res.status(400).json({ error: error.message })
      }
}

const getSingleCustomer = async (req, res) => {
      const { customer_id } = req.params;
      try {
           const customer = await Customer.find({ customer_id })
           //displaying response to user: single workout by ID from DB
           res.status(200).json(customer)
      } catch (error) {
           res.status(400).json({ error: 'No customer found' })
      }
 }


const updateSingleCustomer = async (req, res) => {
      const { id } = req.params

      if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No Customer found' })
      }
      try {
            const singleCustomer = await Customer.findOneAndUpdate({ _id: id }, {
                  ...req.body
            })

            //displaying response to user: deleted workout by ID from DB
            res.status(200).json(singleCustomer)
      } catch (error) {
            res.status(400).json({ error: 'No Customer found' })
      }
}

const deleteSingleCustomer = async (req, res) => {
      //id of the request parameter. Ex: xxx/delete/12e3289je3o2jtu2
      const { id } = req.params;

      //check if the id passed in parameter is valid id.
      if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No Customer found' })
      }
      try {
            //deleting an entry with the id in the parameter
            const singleCustomer = await Customer.findOneAndDelete({ _id: id })

            //return a response which is the deleted one.
            res.status(200).json(singleCustomer)
      } catch (error) {
            res.status(400).json({ error: 'No Customer found' })
      }
}

module.exports = {
      createCustomer,
      getAllCustomer,
      getSingleCustomer,
      updateSingleCustomer,
      deleteSingleCustomer
}