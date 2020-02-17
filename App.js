
const express=require('express')
const foodRouter=require('./routes/foodRoutes')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const cors=require('cors')

//expressjs server instance
const app = express();
 
//middleware
 app.use(cors());
 app.use(bodyparser.json());
 app.use(foodRouter);



mongoose.connect('mongodb+srv://nilesh:zic55Z4ypJaz68LM@cluster0-v8npc.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
},()=>{console.log('SUCCESS_CONNECTED_MONGOATLAS')}).catch(err => console.log(err));



app.listen(3000, () => { console.log('SERVER_RUNNING:/3000') });