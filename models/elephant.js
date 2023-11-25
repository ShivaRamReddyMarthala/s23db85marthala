const mongoose = require("mongoose")
const elephantSchema = mongoose.Schema({
name: String,
species: String,
age:{
    type:Number,
    min : 5,
    max : 50,
    require : true
}

})
module.exports = mongoose.model("elephant", elephantSchema)