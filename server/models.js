const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ravenDash", {useNewUrlParser:true});

const RavenSchema = mongoose.Schema({
    name: String,
    age: Number,
}, {timestamps:true});
const Raven = mongoose.model('Raven', RavenSchema);

module.exports = Raven;