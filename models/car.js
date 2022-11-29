const mongoose = require("mongoose") 
const carSchema = mongoose.Schema({ 
    car_name : {
            type: String,
            required:true
    },
    car_color :{
            type: String,
            required:true
    },

    car_size :{
        type:Number,
        required:true,
        min:1,
        max:160
             
    } 
}) 
 
module.exports = mongoose.model("car",carSchema)

