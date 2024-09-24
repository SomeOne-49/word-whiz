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
    collectionId: string;
    userId: string
  },
  path: string
) => {
  const { front, back, note, img, color, collectionId, userId } = data;
  try {
    console.log(userId);
    await connectToDatabase();

    const newCard = await Card.create({
      front,
      back,
      note,
      img,
      color,
      collectionId,
      userId
    });

    

    await Collection.updateOne(
      { _id: collectionId },
      { $push: { cards: newCard._id } }
    );
    revalidatePath(path);
  } catch (e) {
    console.log(e);
  }
};

export const getCollectionCards = async (collectionId: string) => {
  try {
    await connectToDatabase();

    const cards = await Card.find({ collectionId });
    if (!cards || cards.length === 0) {
      return [];
    }

    return cards;
  } catch (e) {
    console.error('Error fetching cards:', e);
    throw e;
  }
};

export const getCards = async (userId: string, searchQuery: string) => {
  try {
    await connectToDatabase();
    let query = {};

    if (searchQuery && searchQuery.trim()) {
      query = {
        $and: [
          { userId },
          {
            $or: [
              { front: { $regex: `^${searchQuery.trim()}`, $options: 'i' } },
              { back: { $regex: `^${searchQuery.trim()}`, $options: 'i' } },
            ],
          },
        ],
      };
    }

    const cards = await Card.find(query);
    return JSON.stringify(cards);
  } catch (e) {
    console.log(e);
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

    // تحديث الكرت
    const updatedCard = await Card.findOneAndUpdate(
      { _id: id },
      { front, back, note, collectionId: collection, color },
      { new: true }
    );

    if (!updatedCard) {
      throw new Error('Card not found');
    }

    const oldCollection = await Collection.updateOne(
      { cards: id },
      { $pull: { cards: id } }
    );

    const newCollection = await Collection.updateOne(
      { _id: collection },
      { $addToSet: { cards: id } }
    );

    revalidatePath(path);
    return { oldCollection, newCollection };
  } catch (e) {
    console.error('Error updating card:', e);
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
