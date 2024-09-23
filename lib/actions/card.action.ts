'use server';

import Card from '@/database/card.model';
import Collection from '@/database/collections.model';
import { revalidatePath } from 'next/cache';
import { connectToDatabase } from '../mongodb';

export const createCard = async (
  data: {
    front: string;
    back: string;
    note: string;
    img?: string;
    color?: string;
    cardCollection: string;
  },
  path: string
) => {
  const { front, back, note, img, color, cardCollection } = data;
  try {
    await connectToDatabase();

    // إنشاء الكرت
    const newCard = await Card.create({
      front,
      back,
      note,
      img,
      color,
      cardCollection,
    });

    await Collection.updateOne(
      { _id: cardCollection },
      { $push: { cards: newCard._id } }
    );
    revalidatePath(path);
  } catch (e) {
    console.log(e);
  }
};

export const getCard = async (cardId: string) => {
  try {
    await connectToDatabase();
    const card = Card.findById({ _id: cardId });
    if (!card) {
      throw new Error('Card not found');
    }
    return card;
  } catch (e) {
    console.log(e);
  }
};

export const toggleMarkedCard = async (cardId: string, path: string) => {
  try {
    await connectToDatabase();

    const card = await getCard(cardId);

    if (!card) throw new Error('Card Not Found.');

    const isMarked = card.isMarked;

    const updatedCard = await Card.findByIdAndUpdate(
      cardId,
      { isMarked: !isMarked },
      { new: true }
    ).lean();


    revalidatePath(path);
    return JSON.stringify(updatedCard);
  } catch (e) {
    console.log(e);
  }
};
