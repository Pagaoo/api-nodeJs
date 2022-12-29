require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes.js')

mongoose.connect(mongoString);
const database = mongoose.connection;


database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('database connected')
})

const app = express();

app.use(express.json());
app.use('/api', routes);

port = 3000;

app.listen(port, () => {
    console.log(`Server started at ${port}`)
})