import { z } from 'zod';

export const collectionSchema = z.object({
  name: z.string().min(3).max(30),
  color: z.string(),
  icon: z.string().min(1),
});

export const cardSchema = z.object({
  front: z.string().min(1).max(40),
  back: z.string().min(1).max(40),
  note: z.string().min(3).max(120),
  isMarked: z.boolean(),
  img: z.string(),
  color: z.string(),
  cardCollection: z.string().length(24, 'cardCollection must be a valid ObjectId'),
});
