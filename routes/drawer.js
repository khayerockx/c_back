const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createDrawer,
     getAllDrawer,
     updateDrawer,
     getSingleDrawer,
     getCurrentDrawer
} = require('../controller/drawerController')
router.use(requireAuth)


/**CREATE NEW Product */
router.post('/', createDrawer)

/**GET ALL Product */
router.get('/', getAllDrawer)

/**GET current Product */
router.get('/current/', getCurrentDrawer)

/**GET SINGLE EMPLOYEE */
router.get('/:id', getSingleDrawer)

//update
router.patch('/:id', updateDrawer)

module.exports = router