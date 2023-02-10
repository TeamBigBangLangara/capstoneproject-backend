import mongoose,{ Schema, Document } from "mongoose";

interface eventCustomization {
  radius: Number;
  crowd_count : Number;
  my_category : String[];
}

export interface IUserProfile extends Document {
    address: String;
    geoLocation_Latitude: Number;
    profile_photo: String;
    business_name: String;
    notification_setting: Boolean;
    user_id: String;
    event_customization: eventCustomization;
    
}

const eventCustomizationSchema = new Schema ({
      radius: {
        type: Number,
        required: true
      },
      crowd_count : {
        type: Number,
        required: true
      },
      my_category :{
        type: [String],
        required: true
      }
});

const UserProfileSchema = new Schema ({
  address: {
    type: String,
    required: true
  },
  geoLocation_Latitude: {
    type: Number,
    required: true
  },
  geoLocation_Longitude: {
    type: String,
    required: false
  },
  profile_photo: {
    type: String,
    required: false
  },
  business_name: {
    type: String,
    required: true
  },
  notification_setting: {
    type: Boolean,
    required: false
  },
  user_id: {
    type: String,
    required: true
  },
  event_customization: {
    type: eventCustomizationSchema,
    required: false
  }
});

export default mongoose.model<IUserProfile>('UserProfile', UserProfileSchema);


