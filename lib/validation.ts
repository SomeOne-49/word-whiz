import { z } from 'zod';

export const collectionSchema = z.object({
  name: z.string().min(3).max(30),
  color: z.string(),
  icon: z
    .string()
    .regex(/^\p{Extended_Pictographic}$/u, 'Only one emoji is allowed'),
});

export const cardSchema = z.object({
  front: z.string().min(1).max(40),
  back: z.string().min(1).max(40),
  note: z.string().min(3).max(120).optional(),
  img: z.string().optional(),
  color: z.string().optional(),
  collectionId: z.string()
});
