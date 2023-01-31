const mongoose = require("mongoose")

const ratingSchema = mongoose.Schema({
    user_id: String,
	category: String,
    rate : Number,
    event_id : String,
})

module.exports = mongoose.model("Rating", ratingSchema);