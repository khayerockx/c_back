const { default: mongoose } = require('mongoose')
const Product = require('../model/productModel')


/**CREATE NEW Product */
const createProduct = async (req, res) => {
      const {
            product_code,
            product_name,
            product_description,
            product_cost_price,
            product_selling_price,
            product_stock
      } = req.body

      try {
            const product = await Product.create({
                  product_code,
                  product_name,
                  product_description,
                  product_cost_price,
                  product_selling_price,
                  product_stock
            })
            res.status(200).json(product)
      } catch (error) {
            res.status(400).json({ error: error.message })
      }
}

const getAllProduct = async (req, res) => {
      try {
            /**Workout.find - finding al entries from DB
             * await Workout.find() will run immediately even
             * if the "workout" variable is not called yet
             */
            const allProduct = await Product.find({}).sort({ createdAt: -1 })
            //displaying response to user: all workouts from DB
            res.status(200).json(allProduct)
      } catch (error) {
            res.status(400).json({ error: error.message })
      }
}

const getSingleProduct = async (req, res) => {
      const { product_code } = req.params;
      try {
           const product = await Product.find({ product_code })
           console.log(product)
           //displaying response to user: single workout by ID from DB
           res.status(200).json(product)
      } catch (error) {
           res.status(400).json({ error: 'No product found' })
      }
 }


const updateSingleProduct = async (req, res) => {
      const { id } = req.params

      if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No Product found' })
      }
      try {
            const singleProduct = await Product.findOneAndUpdate({ _id: id }, {
                  ...req.body
            })

            //displaying response to user: deleted workout by ID from DB
            res.status(200).json(singleProduct)
      } catch (error) {
            res.status(400).json({ error: 'No Product found' })
      }
}

const deleteSingleProduct = async (req, res) => {
      //id of the request parameter. Ex: xxx/delete/12e3289je3o2jtu2
      const { id } = req.params;

      //check if the id passed in parameter is valid id.
      if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No Product found' })
      }
      try {
            //deleting an entry with the id in the parameter
            const singleProduct = await Product.findOneAndDelete({ _id: id })

            //return a response which is the deleted one.
            res.status(200).json(singleProduct)
      } catch (error) {
            res.status(400).json({ error: 'No Product found' })
      }
}

module.exports = {
      createProduct,
      getAllProduct,
      getSingleProduct,
      updateSingleProduct,
      deleteSingleProduct
}