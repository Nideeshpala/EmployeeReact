// set path for each request


const express=require('express')

const uploads = require('../multerconfig/storageconfig')
const { employeeRegister } = require('../controllers/logic')

// create  an object for router class in express
const router=new express.Router()

// register employee - post
router.post('/empolyees/register',uploads.single('user_profile'),employeeRegister)

// get all employees
router.post('/employees/getEmplyees')


module.exports=router