const express =require('express')
const app =express();

const mongoose = require ('mongoose');
// const { Mongoose } = require('mongoose');
const cat_data=require("./models/cat.js");

 var bodyparser= require("body-parser");
 var jsonparser = bodyparser.json();


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
// const data = new cat_data(
// {
//   _id: new mongoose.Types.ObjectId(),
//   category:"watch",
//   catid:140,
//   product:"apple",
//   prid:1033,
//   id:50
// })
// data.save().then((result)=>{console.warn(result)
// }).catch((err)=>{console.warn(err)})
app.post('/post',jsonparser,(req,res)=>{
  const data = new cat_data(
    {
       _id: new mongoose.Types.ObjectId(),
       cat:req.body.cat,
       catid:req.body.catid,
       product:req.body.product,
       prid:req.body.prid,
       id:req.body.id,
    })
    data.save().then((result)=>{console.warn(result)
    }).catch((err)=>{console.warn(err)})
})
app.delete("/delete/:id",(req,res)=>{
  cat_data.deleteOne({_id:req.params.id}).then(
    (result)=>{res.status(200).json(result)}
  ).catch( (err)=>{console.log(err)})
})
app.put("/update/:id",jsonparser,(req,res)=>{
  cat_data.updateOne(
    {_id:req.params.id},
    {$set:{
      category:req.body.category,
       catid:req.body.catid,
       product:req.body.product,
       prid:req.body.prid,
       id:req.body.id

    }}).then( (result)=> {res.status(201).json(result)
    }).catch ((err)=>{console.log(err)})
})

app.listen(3800,console.log('running on 3800'))


