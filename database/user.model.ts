import { Document, Schema, model, models } from 'mongoose';

export interface IUser extends Document {
  clerkId: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
  collections: {}[];
  joinedAt: Date;
}

const userSchema = new Schema<IUser>({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  avatar: { type: String },
  collections: [{ type: Schema.Types.ObjectId, ref: 'Collection' }],
  joinedAt: { type: Date, default: Date.now },
});

const User = models?.userSchema || model<IUser>('User', userSchema);

export default User;
