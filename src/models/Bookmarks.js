const mongoose = require("mongoose")

const bookmarksSchema = mongoose.Schema({
    user_id: String,
    event_id : String,
})

module.exports = mongoose.model("Bookmarks", bookmarksSchema);