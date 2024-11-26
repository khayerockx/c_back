
const express = require('express')
require('dotenv').config()
const cors = require("cors");
const mongoose = require('mongoose')
const employeeRoutes = require('./routes/employee')
const leavesRoutes = require('./routes/leaves')
const credentialsRoutes = require('./routes/credentials')
const departmentRoutes = require('./routes/department')
const dtrRoutes = require('./routes/dtr')
const payrollRoutes = require('./routes/payroll')
const additionalRoutes = require('./routes/additional')
const productRoutes = require('./routes/product')
const posRoutes = require('./routes/pos')
const memberRoutes = require('./routes/member')
const savingsRoutes = require('./routes/savings')
const payslipRoutes = require('./routes/payslip')
const drawerRoutes = require('./routes/drawer')
const customerRoutes = require('./routes/customer')
const creditRoutes = require('./routes/credit')
const uploadRoutes = require('./routes/upload'); 


const app = express()
// const corsOptions = {
//         origin: 'https://coop-2af5d.web.app/',
//         credentials: true,
//     };

app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header("Access-Control-Allow-Origin", "https://coop-2af5d.web.app");
        res.header("Access-Control-Allow-Origin","https://chrome.browserless.io/screenshot") // new. remove it if not working
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        next();
})
app.use(cors({ origin: true })); // enable origin cors
/**MIDDLEWARE
 * it will run all the time whenever there are request
 * it is like a global function that will run always whenever there are request detected(ex: GET, POST, etc)
 */
// app.use(cors(corsOptions()));
app.use((req, res, next) => {
        console.log('I am detecting a request - MIDDLEWARE')
        next();
})
app.use(express.json())


/**ROUTES
 * different routes will be define here
 */
app.use('/api/employee', employeeRoutes)
app.use('/api/leaves', leavesRoutes)
app.use('/api/credentials', credentialsRoutes)
app.use('/api/departments', departmentRoutes)
app.use('/api/dtr', dtrRoutes)
app.use('/api/payroll', payrollRoutes)
app.use('/api/additional', additionalRoutes)
app.use('/api/product', productRoutes)
app.use('/api/pos', posRoutes)
app.use('/api/member', memberRoutes)
app.use('/api/savings', savingsRoutes)
app.use('/api/payslip', payslipRoutes)
app.use('/api/drawer', drawerRoutes)
app.use('/api/customer', customerRoutes)
app.use('/api/credit', creditRoutes)
app.use('/api/upload', uploadRoutes); 
/**CONNECT TO DB */
mongoose.connect(process.env.MONGO_URI)
        .then(() => {
                //listen request: 4000, callback function(the console log) to fire if successfully listen to 4k
                app.listen(process.env.PORT || 5000, () => {
                        console.log(`Connected to DB and Listening to port ${process.env.PORT}`)
                })

        })
        .catch((error) => {
                console.log(error)
        })
