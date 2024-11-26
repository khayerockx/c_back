const { default: mongoose } = require('mongoose')
const Department = require('../model/departmentModel')


/**CREATE NEW Department */
const createDepartment = async (req, res) => {
      const { 
            department_id,
            department_name,
            description,
            other_info
     } = req.body

     try {
          const department = await Department.create({ 
            department_id,
            department_name,
            description,
            other_info
          })
          res.status(200).json(department)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const getAllDepartment = async (req, res) => {
     try {
           /**Workout.find - finding al entries from DB
            * await Workout.find() will run immediately even
            * if the "workout" variable is not called yet
            */
           const allDepartment = await Department.find({}).sort({ createdAt: -1 })
           //displaying response to user: all workouts from DB
           res.status(200).json(allDepartment)
     } catch (error) {
           res.status(400).json({ error: error.message })
     }
}

const getSingleDepartment = async (req, res) => {
     const { id } = req.params;

     //check if the id passed in parameter is valid id.
     if (!mongoose.Types.ObjectId.isValid(id)) {
           return res.status(404).json({ error: 'No Department found' })
     }

     try {
           const singleDepartment = await Department.findById(id)
           //displaying response to user: single workout by ID from DB
           res.status(200).json(singleDepartment)
     } catch (error) {
           res.status(400).json({ error: 'No Department found' })
     }
}


const updateSingleDepartment = async (req, res) => {
     const { id } = req.params

     if (!mongoose.Types.ObjectId.isValid(id)) {
           return res.status(404).json({ error: 'No Department found' })
     }
     try {
           const singleDepartment = await Department.findOneAndUpdate({ _id: id }, {
                 ...req.body
           })

           //displaying response to user: deleted workout by ID from DB
           res.status(200).json(singleDepartment)
     } catch (error) {
           res.status(400).json({ error: 'No Department found' })
     }
}

const deleteSingleDepartment = async (req, res) => {
      //id of the request parameter. Ex: xxx/delete/12e3289je3o2jtu2
      const { id } = req.params;
 
      //check if the id passed in parameter is valid id.
      if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No Department found' })
      }
      try {
            //deleting an entry with the id in the parameter
            const singleDepartment = await Department.findOneAndDelete({ _id: id })
 
            //return a response which is the deleted one.
            res.status(200).json(singleDepartment)
      } catch (error) {
            res.status(400).json({ error: 'No Department found' })
      }
 }

module.exports = {
     createDepartment,
     getAllDepartment,
     getSingleDepartment,
     updateSingleDepartment,
     deleteSingleDepartment
}