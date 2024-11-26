const { default: mongoose } = require('mongoose')
const Credentials = require('../model/credentialsModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
     return jwt.sign({_id},process.env.SECRET, {expiresIn: '3d'})
}


const loginUser = async (req, res) => {
     const {username, password} = req.body
     try {  
          const user = await Credentials.login(username, password)
   
          //create a token
          const token = createToken(user._id)
      
          res.status(200).json({username, token})
        } catch (error) {
          res.status(400).json({error: error.message})
        }
   }


const signupUser = async (req, res) => {
     const {username, password} = req.body
   
     try {  
       const user = await Credentials.signup(username, password)

       //create a token
       const token = createToken(user._id)
   
       res.status(200).json({username, token})
     } catch (error) {
       res.status(400).json({error: error.message})
     }
   }

module.exports = {
     signupUser,
     loginUser
}