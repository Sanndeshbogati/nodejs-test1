const express =require('express')
const app =express();

const mongoose = require ('mongoose');
// const { Mongoose } = require('mongoose');
const cat_data=require("./models/cat.js");


//Body Parser Code Cors code --
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req, res, next)=>{
res.setHeader("Access-Control-Allow-Origin","*");
res.setHeader("Access-Control-Allow-Headers",
"Origin,X-Requested-With, Content-Type,Accept");

res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
next();

});
// parser ends


mongoose.connect("mongodb+srv://secret:1301560044@cluster0.wkfko.mongodb.net/electronic?retryWrites=true&w=majority",
{
  useNewUrlparser:true,
  // useCreateIndex:true,
  useUnifiedTopology:true,
  // useFindAndModify:false

}
).then(()=>{console.warn('connection successfull')})



app.get('/category',(req,res)=>{
  cat_data.find().then((cdata)=>{
    res.send(cdata);
    console.log(cdata)
  })
})

app.listen(3800,console.log('running on 3000'))
