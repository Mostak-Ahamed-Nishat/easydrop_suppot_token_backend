require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(cors({
    origin: '*'
}))
app.use(morgan('dev'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.listen(8080, () => {
    console.log('App running')
})