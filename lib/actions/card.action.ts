'use server';
import { FilterQuery } from 'mongoose';

import { colors } from '@/constants';
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
    userId: string;
  },
  path: string
) => {
  const { front, back, note, img, color, collectionId, userId } = data;
  try {
    await connectToDatabase();

    const newCard = await Card.create({
      front,
      back,
      note,
      img,
      isMarked: false,
      color,
      collectionId,
      userId,
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

export const getCollectionCards = async (
  collectionId: string,
  filter?: string,
  colorsFilter?: string[]
) => {
  try {
    await connectToDatabase();
    const query: FilterQuery<typeof Card> = { collectionId };

    if (filter === 'bookmarked') {
      query.$and = [{ isMarked: true }];
    }
    if (colorsFilter && colorsFilter.length > 0) {
      query.$and = query.$and || [];

      for (const color of colorsFilter) {
        query.$and.push({ color: colors[color].bg });
      }
    }

    console.log(query);

    let sortOption: any = {};
    let useShuffle = false;

    switch (filter) {
      case 'oldest':
        sortOption = { createdAt: -1 };
        break;
      case 'newest':
        sortOption = { createdAt: 1 };
        break;
      case 'shuffle':
        useShuffle = true;
        break;
    }

    let cards;
    if (useShuffle) {
      cards = await Card.aggregate([
        { $match: { userId: 'user_2mYe8qaW67gqLtE4w2Plojz7VMr' } },
        // { $match: { collectionId: '66f40c1bdfc3abebf2b91176' } },
        { $sample: { size: 50 } },
      ]);
      console.log(cards[0]?.collectionId);
    } else {
      cards = await Card.find(query).sort(sortOption);
    }

    if (!cards || cards.length === 0) {
      return [];
    }

    return cards;
  } catch (e) {
    console.error('Error fetching cards:', e);
    throw e;
  }
};

// export const getCards = async (userId: string, searchQuery: string) => {
//   try {
//     await connectToDatabase();
//     const query: FilterQuery<typeof Card> = { userId };

//     if (searchQuery) {
//       query.$or = [
//         { front: { $regex: `^${searchQuery}`, $options: 'i' } },
//         { back: { $regex: `^${searchQuery}`, $options: 'i' } },
//       ];
//     }
//     const cards = await Card.find(query).populate({
//       path: 'collectionId',
//       model: Collection,
//     });
//     return JSON.stringify(cards);
//   } catch (e) {
//     console.log(e);
//   }
// };

export const getCards = async (userId: string, searchQuery?: string) => {
  try {
    await connectToDatabase();

    const query: FilterQuery<typeof Card> = { userId };

    if (searchQuery) {
      query.$or = [
        { front: { $regex: `^${searchQuery}`, $options: 'i' } },
        { back: { $regex: `^${searchQuery}`, $options: 'i' } },
      ];
    }

    const cards = await Card.find(query).populate({
      path: 'collectionId',
      model: Collection,
    });

    return JSON.stringify(cards);
  } catch (error) {
    console.error('Error fetching collections:', error);
    throw new Error('Failed to fetch collections');
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
