const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createPayroll,
     getAllPayroll,
     getAllPayrollByDate
} = require('../controller/payrollController')
router.use(requireAuth)


/**CREATE NEW DTR */
router.post('/', createPayroll)

/**GET ALL DTR */
router.get('/', getAllPayroll)

/**GET SINGLE EMPLOYEE */
router.get('/:date', getAllPayrollByDate)




module.exports = router