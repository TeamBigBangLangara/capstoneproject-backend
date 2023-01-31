const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: String,
	email: String,
    UID: String,
})

module.exports = mongoose.model("User", userSchema);