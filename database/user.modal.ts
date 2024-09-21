import { Document, Schema, model, models } from 'mongoose';

export interface IUser extends Document {
  clerkId: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  avatar: string;
  collections: {}[];
  joinedAt: Date;
}

const userSchema = new Schema<IUser>({
  clerkId: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  avatar: { type: String },
  collections: [{ type: Schema.Types.ObjectId, ref: 'Collection' }],
  joinedAt: { type: Date, default: Date.now },
});

const User = models?.userSchema || model<IUser>('User', userSchema);

export default User;
