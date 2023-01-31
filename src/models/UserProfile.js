const { string } = require("i/lib/util");
const mongoose = require("mongoose");


const my_category = new Schema({ name: String });



const userProfileSchema = mongoose.Schema({
    address: Geolocation,
    profile_photo: Blob,
    business_type: String,
    notification_setting: Boolean,
    user_id: String,
    event_customization: {
        radius: Number,
        crowd_count : Number,
        my_category :[my_category],
    }
})

module.exports = mongoose.model("UserProfile", userProfileSchema);