import mongoose,{ Schema, Document } from "mongoose";

export interface IBookmarks extends Document {
    user_id: String;
    event_id: String;    
}

const BookmarksSchema = new Schema ({
  user_id: {
        type: String,
        required: true
      },
      event_id: {
        type: String,
        required: true
      }
});

export default mongoose.model<IBookmarks>('Bookmarks', BookmarksSchema);


