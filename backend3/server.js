const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const transaction = require('./routes/transactions')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')

const app = express()

app.use(express.json())

app.use('/api/v1/transactions', transaction)

app.use(notFound)

const port = 3000

const start = async () => {
    try {
        connectDB(process.env.MONGO_URI)
        
        app.listen(port, console.log(`Server is listening on port ${port}...`.yellow.underline))
    } catch (error) {
        console.log(error)
    }
}

start()

