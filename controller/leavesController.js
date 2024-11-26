const { default: mongoose } = require('mongoose')
const Leaves = require('../model/leavesModel')


/**CREATE NEW Leave */
const createLeave = async (req, res) => {
      const { 
            employee_id,
            employee_fullname,
            leave_type, 
            date, 
            duration, 
            status, 
            approver
     } = req.body

     try {
          const leave = await Leaves.create({ 
                  employee_id, 
                  employee_fullname,
                  leave_type, 
                  date, 
                  duration, 
                  status, 
                  approver
          })
          res.status(200).json(leave)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const getAllLeaves = async (req, res) => {
     try {
           /**Workout.find - finding al entries from DB
            * await Workout.find() will run immediately even
            * if the "workout" variable is not called yet
            */
           const allLeaves = await Leaves.find({}).sort({ createdAt: -1 })
           //displaying response to user: all workouts from DB
           res.status(200).json(allLeaves)
     } catch (error) {
           res.status(400).json({ error: error.message })
     }
}

const getSingleLeave = async (req, res) => {
     const { id } = req.params;

     //check if the id passed in parameter is valid id.
     if (!mongoose.Types.ObjectId.isValid(id)) {
           return res.status(404).json({ error: 'No Leave found' })
     }

     try {
           const singleLeave = await Leaves.findById(id)
           //displaying response to user: single workout by ID from DB
           res.status(200).json(singleLeave)
     } catch (error) {
           res.status(400).json({ error: 'No Leave found' })
     }
}


const updateSingleLeave = async (req, res) => {
     const { id } = req.params

     if (!mongoose.Types.ObjectId.isValid(id)) {
           return res.status(404).json({ error: 'No Leave found' })
     }
     try {
           const singleLeave = await Leaves.findOneAndUpdate({ _id: id }, {
                 ...req.body
           })

           //displaying response to user: deleted workout by ID from DB
           res.status(200).json(singleLeave)
     } catch (error) {
           res.status(400).json({ error: 'No Leave found' })
     }
}
const deleteSingleLeave = async (req, res) => {
      //id of the request parameter. Ex: xxx/delete/12e3289je3o2jtu2
      const { id } = req.params;
 
      //check if the id passed in parameter is valid id.
      if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No Leave found' })
      }
      try {
            //deleting an entry with the id in the parameter
            const singleLeave = await Leaves.findOneAndDelete({ _id: id })
 
            //return a response which is the deleted one.
            res.status(200).json(singleLeave)
      } catch (error) {
            res.status(400).json({ error: 'No Leave found' })
      }
 }

module.exports = {
     createLeave,
     getAllLeaves,
     getSingleLeave,
     updateSingleLeave,
     deleteSingleLeave
}