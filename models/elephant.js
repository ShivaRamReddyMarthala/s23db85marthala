const mongoose = require("mongoose")
const elephantSchema = mongoose.Schema({
name:{
    type : String,
    require : true,
    minlength : 10,
    maxlength : 50,
} ,
age:{
    type:Number,
    min : 5,
    max : 50,
    require : true
},
species: String,
})
module.exports = mongoose.model("elephant", elephantSchema)