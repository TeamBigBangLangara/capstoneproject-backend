const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName: String,
	email: String,
})

module.exports = mongoose.model("User", userSchema);