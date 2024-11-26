const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createMember,
     getAllMember,
     getSingleMember,
     deleteSingleMember,
     updateSingleMember
} = require('../controller/memberController')
router.use(requireAuth)


router.post('/', createMember)


router.get('/', getAllMember)


router.get('/member/:member_id', getSingleMember)

router.patch('/:id', updateSingleMember)

//delete
router.delete('/:id', deleteSingleMember)


module.exports = router