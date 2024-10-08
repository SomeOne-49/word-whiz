import { Document, Schema, model, models } from 'mongoose';

export interface ICollection extends Document {
  name: string;
  icon: string;
  createdAt: Date;
  itemCount: number;
  color: string;
  userId: string;
  cards: Schema.Types.ObjectId[];
}

const CollectionSchema = new Schema<ICollection>({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  itemCount: { type: Number },
  color: { type: String, required: true },
  userId: { type: String, required: true },
  cards: { type: [Schema.Types.ObjectId], required: true, default: [] },
});

const Collection =
  models.Collection || model<ICollection>('Collection', CollectionSchema);

export default Collection;
