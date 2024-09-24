import { Document, model, models, Schema } from 'mongoose';
export interface ICard extends Document {
  front: string;
  back: string;
  note: string;
  isMarked: boolean;
  img: string;
  color: string;
  createdAt: Date;
  collectionId: Schema.Types.ObjectId;
  userId: string
}

const CardSchema = new Schema<ICard>({
  front: { type: String, required: true },
  back: { type: String, required: true },
  note: { type: String },
  isMarked: { type: Boolean },
  img: { type: String },
  color: { type: String, default: '#BEEAFF' },
  createdAt: { type: Date, default: Date.now() },
  collectionId: { type: Schema.Types.ObjectId },
  userId: {type: String, required: true}
});

const Card = models?.Card || model<ICard>('Card', CardSchema);

export default Card;
