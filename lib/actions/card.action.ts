'use server'

import Card from '@/database/card.model';
import { connectToDatabase } from '../mongodb';

export const createCard = async (data: {
  front: string;
  back: string;
  note: string;
  isMarked: boolean;
  img: string;
  color: string;
  cardCollection: string;
}) => {
  const { front, back, note, isMarked, img, color, cardCollection } = data;
  try {
    await connectToDatabase();
    await Card.create({
      front,
      back,
      note,
      isMarked,
      img,
      color,
      cardCollection,
    });
  } catch (e) {
    console.log(e);
  }
};
