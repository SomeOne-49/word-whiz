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

export const getCards = async (collectionId: string) => {
  try {
    await connectToDatabase();

    console.log(collectionId);

    const cards = await Card.find({ cardCollection: collectionId });
    if (!cards || cards.length === 0) {
      return [];
    }

    return JSON.stringify(cards);
  } catch (e) {
    console.error('Error fetching cards:', e);
    throw e;
  }
};

export const toggleMarkedCard = async (cardId: string, path: string) => {
  try {
    await connectToDatabase();

    const card = await Card.findById({ _id: cardId });

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

export const updateCard = async (
  id: string,
  data: {
    front: string;
    back: string;
    note?: string;
    collection: string;
    color?: string;
  },
  path: string
) => {
  try {
    const { front, back, note = '', collection, color = '#BEEAFF' } = data;
    await connectToDatabase();

    await Card.findOneAndUpdate(
      { _id: id },
      { front, back, note, collectionId: collection, color },
      { new: true }
    );

    revalidatePath(path);
  } catch (e) {
    console.log(e);
  }
};

export const deleteCard = async (id: string, path: string) => {
  try {
    await connectToDatabase();

    const card = await Card.findOneAndDelete({ _id: id });

    if (!card) {
      throw new Error('Card not found');
    }

    await Collection.updateOne({ cards: id }, { $pull: { cards: id } });

    revalidatePath(path);
  } catch (e) {
    console.log(e);
    throw new Error('Error deleting the collection');
  }
};
