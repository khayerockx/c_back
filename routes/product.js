const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createProduct,
     getAllProduct,
     updateSingleProduct,
     getSingleProduct,
     deleteSingleProduct
} = require('../controller/productController')
router.use(requireAuth)


/**CREATE NEW Product */
router.post('/', createProduct)

/**GET ALL Product */
router.get('/', getAllProduct)

/**GET SINGLE EMPLOYEE */
router.get('/code/:product_code', getSingleProduct)

//delete
router.delete('/:id', deleteSingleProduct)

//update
router.patch('/:id', updateSingleProduct)





module.exports = router