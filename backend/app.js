const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/db')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

connectDB()

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(notFound)
app.use(errorHandler)

module.exports = app
