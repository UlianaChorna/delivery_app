const mongoose = require("mongoose");
// const ProductCartSchema = require("./productCart")
const UserCartSchema = new mongoose.Schema(
    {
        name: {type: String},
        address:{type:String},
        email:{type:String},
        phone:{type:String},
     
        isCompleted:{type:Boolean},
        totalPrice:{type:Number},
        // productList:{type:[ProductCartSchema]},
    
    },

    {timestamps: true}
)

module.exports = mongoose.model("UserCartSchema", UserCartSchema)
