//sample from js file seeding data to MongoDB database
// Importing the models from the models dir/
import Budget from '../models/budget.js'
import State from '../models/state.js'
import Treasury from '../models/treasury.js'

//importing the data from the JSON and the connection from the file
import Budgets from'./budget.json' assert{type: 'json'}
import States from'./state.json' assert{type: 'json'}
import Treasures from'./treasury.json' assert{type: 'json'}
import mongoose from './connection.js'

//creating budgets in database from API
Budget.deleteMany()
Budget.create(Budgets)
.then(budgets => {
  console.log(budgets)
  })
  .catch(err => {
  console.log(err)
  })
.then(mongoose.disconnect)
.then(()=> console.log("All done!"))
