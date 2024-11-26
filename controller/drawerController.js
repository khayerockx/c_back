const { default: mongoose } = require('mongoose')
const Drawer = require('../model/drawerModel')


/**CREATE NEW Product */
const createDrawer = async (req, res) => {
      const {
            drawer_id,
            drawer_startdatetime,
            drawer_enddatetime,
            drawer_starting_cash,
            drawer_sales,
            drawer_expected_cash,
            drawer_actual_cash,
            drawer_status
      } = req.body

      try {
            const drawer = await Drawer.create({
                  drawer_id,
                  drawer_startdatetime,
                  drawer_enddatetime,
                  drawer_starting_cash,
                  drawer_sales,
                  drawer_expected_cash,
                  drawer_actual_cash,
                  drawer_status
            })
            res.status(200).json(drawer)
      } catch (error) {
            res.status(400).json({ error: error.message })
      }
}

const getAllDrawer = async (req, res) => {
      try {
            /**Workout.find - finding al entries from DB
             * await Workout.find() will run immediately even
             * if the "workout" variable is not called yet
             */
            const allDrawer = await Drawer.find({}).sort({ createdAt: -1 })
            //displaying response to user: all workouts from DB
            res.status(200).json(allDrawer)
      } catch (error) {
            res.status(400).json({ error: error.message })
      }
}

const getCurrentDrawer = async (req, res) => {
      try {
            const allDrawer = await Drawer.findOne().sort({ createdAt: -1 })
            //displaying response to user: all workouts from DB
            res.status(200).json(allDrawer)
      } catch (error) {
            res.status(400).json({ error: error.message })
      }
 }

 const getSingleDrawer = async (req, res) => {
      const { drawer_id } = req.params;
      try {
           const drawer = await Drawer.find({ drawer_id })
           console.log(drawer)
           //displaying response to user: single workout by ID from DB
           res.status(200).json(drawer)
      } catch (error) {
           res.status(400).json({ error: 'No product found' })
      }
 }

const updateDrawer = async (req, res) => {
      const { id } = req.params

      if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No Drawer found' })
      }
      try {
            const singleDrawer = await Drawer.findOneAndUpdate({ _id: id }, {
                  ...req.body
            })

            res.status(200).json(singleDrawer)
      } catch (error) {
            res.status(400).json({ error: 'No Drawer found' })
      }
}



module.exports = {
      createDrawer,
      getAllDrawer,
      updateDrawer,
      getSingleDrawer,
      getCurrentDrawer
}