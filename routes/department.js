const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createDepartment,
     getAllDepartment,
     getSingleDepartment,
     updateSingleDepartment,
     deleteSingleDepartment
} = require('../controller/departmentController')

router.use(requireAuth)

/**CREATE NEW DEPARTMENT */
router.post('/', createDepartment)

/**GET ALL DEPARTMENTS */
router.get('/', getAllDepartment)

/**GET SINGLE DEPARTMENT */
router.get('/:id', getSingleDepartment)

/**EDIT SINGLE DEPARTMENT */
router.patch('/:id', updateSingleDepartment)

/**DELETE SINGLE DEPARTMENT */
router.delete('/:id', deleteSingleDepartment)





module.exports = router