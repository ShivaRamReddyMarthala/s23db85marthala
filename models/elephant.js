const mongoose = require("mongoose")
const elephantSchema = mongoose.Schema({
name: String,
age: Number,
species: String
})
module.exports = mongoose.model("Costume", elephantSchema)