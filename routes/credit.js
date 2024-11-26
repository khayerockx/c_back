const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createCredit,
     getAllCredit,
     getSingleCredit,
     deleteSingleCredit,
     getSingleCustomer
} = require('../controller/creditController')
router.use(requireAuth)


/**CREATE NEW Product */
router.post('/', createCredit)

/**GET ALL Product */
router.get('/', getAllCredit)

router.get('/customer_id', getSingleCustomer)

/**GET SINGLE EMPLOYEE */
router.get('/transaction/:transaction_id', getSingleCredit)

//delete
router.delete('/:id', deleteSingleCredit)


module.exports = router