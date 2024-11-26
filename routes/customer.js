const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createCustomer,
     getAllCustomer,
     updateSingleCustomer,
     getSingleCustomer,
     deleteSingleCustomer
} = require('../controller/customerController')
router.use(requireAuth)


/**CREATE NEW Customer */
router.post('/', createCustomer)

/**GET ALL Customer */
router.get('/', getAllCustomer)

/**GET SINGLE EMPLOYEE */
router.get('/customer_id', getSingleCustomer)

//delete
router.delete('/:id', deleteSingleCustomer)

//update
router.patch('/:id', updateSingleCustomer)





module.exports = router