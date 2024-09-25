'use server';

// import Card from '@/database/card.model';
import Collection from '@/database/collections.model';
import { FilterQuery } from 'mongoose';
import { revalidatePath } from 'next/cache';
import { connectToDatabase } from '../mongodb';

export const getCollections = async (
  userId: string,
  path?: string,
  searchQuery?: string,
  filter?: string
) => {
  try {
    await connectToDatabase();

    const query: FilterQuery<typeof Collection> = { userId };

    if (searchQuery) {
      query.$or = [{ name: { $regex: `^${searchQuery}`, $options: 'i' } }];
    }

    let sortOptions = {};

    switch (filter) {
      case 'newest':
        sortOptions = { createdAt: -1 };
        break;
      case 'oldest':
        sortOptions = { createdAt: 1 };
        break;
      case 'items':
        sortOptions = { items: -1 };
        break;
      case 'name':
        sortOptions = { name: 1 };
        break;
      default:
        sortOptions = {};
    }

    const collections = await Collection.find(query).sort(sortOptions);

    revalidatePath(path || '/');

    return JSON.stringify(collections);
  } catch (error) {
    console.error('Error fetching collections:', error);
    throw new Error('Failed to fetch collections');
  }
};

export const getCollectionById = async (
  cardsOnly: boolean = false,
  id: string
) => {
  try {
    await connectToDatabase();
    const projection = cardsOnly ? { cards: 1 } : {};

    const collection = await Collection.findById(id, projection);
    return collection;
  } catch (e) {
    console.log(e);
    throw new Error('Failed to fetch collection');
  }
};

export const createCollection = async (
  data: {
    name: string;
    color: string;
    icon: string;
    userId: string;
  },
  path: string
) => {
  try {
    await connectToDatabase();
    const { name, color, icon, userId } = data;
    await Collection.create({
      name,
      color,
      icon,
      userId,
      cards: [],
    });
    revalidatePath(path);
  } catch (e) {
    console.log(e);
  }
};

export const deleteCollection = async (id: string, path: string) => {
  try {
    await connectToDatabase();

    const collection = await Collection.findOneAndDelete({ _id: id });

    if (!collection) {
      throw new Error('Collection not found');
    }

    // await Card.deleteMany({ cardCollection: id });

    revalidatePath(path);
  } catch (e) {
    console.log(e);
    throw new Error('Error deleting the collection');
  }
};

export const updateCollection = async (
  id: string,
  data: {
    name: string;
    color: string;
    icon: string;
  },
  path: string
) => {
  try {
    const { name, color, icon } = data;
    await connectToDatabase();
    await Collection.findOneAndUpdate(
      { _id: id },
      { name, color, icon },
      { new: true }
    );
    revalidatePath(path);
  } catch (e) {
    console.error(`Failed to update collection with id ${id}:`, e);
    throw new Error('Could not update collection');
  }
};
