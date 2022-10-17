require('dotenv').config()

const express = require('express')
const app = express()
const router = express.Router()
const ejs = require('ejs')
const path = require('path')
// const expressEjsLayout = require('express-ejs-layouts')

const mongoose = require('mongoose')
mongoose.connect(process.env.DB, {
    useNewUrlParser: true, 
    useUnifiedTopology : true
})
const db = mongoose.connection
db.on('error', console.log.bind(console, 'connection error'))
db.once('open', (callback) => {
    console.log('Connected to MongoDB #1.')
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
// app.use(expressEjsLayout)
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path .join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/papers', (req, res) => {
    res.render('papers')
})
// app.get('/Papers/Horizons of Modality.pdf', (req, res) => {
//     res.render('Papers/Horizons of Modality.pdf')
// })








module.exports = app