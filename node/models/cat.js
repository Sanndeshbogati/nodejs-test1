const mongoose= require ('mongoose')
let catSchema =new mongoose.Schema(
  {
    _id:mongoose.Schema.Types.ObjectId,
    category:String,
    catid:Number,
    product:String,
    prid:Number,
    id:Number
  }
)
module.exports=mongoose.model("materialS",catSchema)
