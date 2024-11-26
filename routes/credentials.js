const express = require('express')
const router = express.Router()
const {
     loginUser,
     signupUser,
} = require('../controller/credentialsController')



/**CREATE NEW Credentials */
router.post('/login', loginUser)

/**GET ALL CredentialsS */
router.post('/signup', signupUser)



module.exports = router