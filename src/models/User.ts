import mongoose,{ Schema, Document } from "mongoose";

export interface IUser extends Document {
    user_name: String;
    email: String;
    UID: String;
    
}

const UserSchema = new Schema ({
    user_name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      UID: {
        type: String,
        required: true
      }
});

export default mongoose.model<IUser>('User', UserSchema);


