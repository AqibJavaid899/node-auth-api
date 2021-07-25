const User = require('../models/User')
const {registerValidation} = require('../Validation/validation')
const bcrypt = require('bcryptjs')


// Registering User Account to the DB
const registerUser = async (req, res) => {

    // Let's Validate the data first
    const {error} = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // Checking that the provided email is already existed or not
    const isEmailExisted = await User.findOne({email: req.body.email})
    if (isEmailExisted) return res.status(400).send("Email already exists.")

    // Hashing the Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })


    try {
        const savedUser = await user.save()
        res.status(200).send(savedUser)
    } catch (error) {
        res.status(400).send({message: error})
    }

}

module.exports.registerUser = registerUser