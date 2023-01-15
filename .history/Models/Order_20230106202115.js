const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
   email: {type:String,required:true,unique:true},
   orders : [{
    amount:{type:Number,required:true,},
    images:{type:String,required:true,},
   }]
})

export default mongoose.models?.Order ||mongoose.model('Order', orderSchema)
