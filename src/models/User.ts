import mongoose,{ Schema, Document } from "mongoose";

export interface IUser extends Document {
    userName: String;
    email: String;
    UID: String;
    
}

const UserSchema = new Schema ({
    userName: {
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


