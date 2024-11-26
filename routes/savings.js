const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createSavings,
     getAllSavings,
     getSingleSavings,
     deleteSingleSavings,
     updateSingleSavings
} = require('../controller/savingsController')
router.use(requireAuth)


router.post('/', createSavings)


router.get('/', getAllSavings)


router.get('/:member_id', getSingleSavings)

router.patch('/:id', updateSingleSavings)

//delete
router.delete('/:id', deleteSingleSavings)


module.exports = router