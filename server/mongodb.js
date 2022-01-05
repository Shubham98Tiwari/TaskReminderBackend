const mongoose = require('mongoose')
const server = 'localhost:27017'
const database = 'db2'
class Database {
    constructor() {
      this._connect()
    }
    
_connect() {
    console.log ("server and data base ", server, database)
       mongoose.connect(`mongodb://${server}/${database}`, { useUnifiedTopology: true })
         .then(() => {
           console.log('Database connection successful')
         })
         .catch(err => {
           console.log('Database connection error ',err)
         })
    }
  }
  
  module.exports = new Database()