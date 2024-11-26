const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createPos,
     getAllPos,
     getSinglePos,
     deleteSinglePos
} = require('../controller/posController')
router.use(requireAuth)


/**CREATE NEW Product */
router.post('/', createPos)

/**GET ALL Product */
router.get('/', getAllPos)

/**GET SINGLE EMPLOYEE */
router.get('/transaction/:transaction_id', getSinglePos)

//delete
router.delete('/:id', deleteSinglePos)


module.exports = router