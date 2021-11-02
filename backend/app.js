const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(express.json())
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

module.exports = app
