const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3300
const mongoose = require('mongoose')

// Database connection
const url = 'mongodb+srv://Ankitpizza:ankit@5555@cluster0.wiltt.mongodb.net/pizza?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database Connected.....');
}).catch(err => {
    console.log('connection failed....')
});

// Assets
app.use(express.static('public'))

// set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')


require('./routes/web')(app)


app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}` )
})