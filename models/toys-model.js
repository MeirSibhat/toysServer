const mongoose = require("mongoose");
const Joi = require("@hapi/joi")
const config = require("config");

let toysSchema =  mongoose.Schema({
    name: {
        type:String,
        required:true,
        minLength:2,
        maxLength:99
      },
      info:{
        type:String,
        required:true,
        minLength:2,
        maxLength:200
      },
    category :{
        type:String,
        required:true,
        minLength:2,
        maxLength:99
      },
     img:{
        type:String,
        required:true,
        minLength:10,
        maxLength:200
      },
     price: {
        type:Number,
        required:true,
        maxLength:99,
      },
      date:{type:Date,default:Date.now()}
})


exports.toysModel = mongoose.model("toys",toysSchema);

const validToys= (_toys)=>{
    let joiSchema = Joi.object({
        id:Joi.string(),
        name:Joi.string().min(2).max(99).required(),
        info:Joi.string().min(2).max(200).required(),
        category:Joi.string().min(2).max(99).required(),
        img:Joi.string().min(10).max(200).required(),
        price:Joi.number().max(99999999).required(),

    })
    return joiSchema.validate(_toys)
}
exports.validToys= validToys;
// name ,info ,category,img,price