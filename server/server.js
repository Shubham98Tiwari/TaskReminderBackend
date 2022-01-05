const https = require('https');
const mongoConnection = require ('./mongodb');
const express = require ('express');
const app = express ();
const http = require('http').createServer(app);
const port = 9000
const taskRoute = require('./../routes/taskRoute')
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use ('/taskDtls', taskRoute)
http.listen(port, () => {
    console.log(`App server started at http://localhost:${port}`)
})
module.exports = app