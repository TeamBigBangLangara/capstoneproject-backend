import mongoose,{ Schema, Document } from "mongoose";

export interface IRating extends Document {
    user_id: String;
    category?: String;
    rate: Number;
    event_id: String;    
}

const RatingSchema = new Schema ({
  user_id: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: false
      },
      rate: {
        type: Number,
        required: true
      },
      event_id: {
        type: String,
        required: true
      }
});

export default mongoose.model<IRating>('Rating', RatingSchema);


