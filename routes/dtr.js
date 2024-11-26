const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createDtr,
     getAllDtr,
     getAllDtrByDate,
     getSingleDtr,
     editSingleDtr,
     deleteSingleDtr
} = require('../controller/dtrController')
router.use(requireAuth)



/**CREATE NEW DTR */
router.post('/', createDtr)
/**GET ALL DTR */
router.get('/', getAllDtr)
/**GET SINGLE EMPLOYEE */
router.get('/:date', getAllDtrByDate)
router.patch('/:id', editSingleDtr)
router.get('/employee/:employee_id', getSingleDtr)
router.delete('/:id', deleteSingleDtr)

module.exports = router