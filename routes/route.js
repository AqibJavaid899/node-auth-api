const router = require('express').Router()
const {registerUser} = require('../controller/authController')
// Defining Routes

router.get('/', (req, res) => {
    res.send('API Route..')
})

router.post('/register', registerUser)


module.exports = router