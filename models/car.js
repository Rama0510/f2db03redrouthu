const mongoose = require("mongoose") 
const carSchema = mongoose.Schema({ 
    car_name :string,
    car_color : number,
    car_size :number
}) 
 
module.exports = mongoose.model("car", 
carSchema)