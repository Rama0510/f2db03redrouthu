const mongoose = require("mongoose") 
const carSchema = mongoose.Schema({ 
    car_name : String,
    car_color : String,
    car_size : Number
}) 
 
module.exports = mongoose.model("Car",carSchema)

