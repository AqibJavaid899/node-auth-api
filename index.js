const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const authRouter = require('./routes/route')
const bodyParser = require('body-parser')

// Middleware Routes
app.use(bodyParser.json())
app.use('/api/user', authRouter)



// Main Route
app.get('/', (req, res) => {
    res.send("Hello There!!")
})

// Connecting to DB
mongoose.connect(process.env.DB_CONNECTION_STR,
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('Connected to DB!'))
    
    


const PORT = process.env.PORT | 3000
app.listen(PORT, () => console.log(`Server is up and running on PORT ${PORT}`))