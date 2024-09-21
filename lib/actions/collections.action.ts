'use server';

import Collection from '@/database/collections.model';
import { revalidatePath } from 'next/cache';
import { connectToDatabase } from '../mongodb';

export const getCollections = async () => {
  try {
    await connectToDatabase();
    const collections = await Collection.find({});
    return { collections };
  } catch (error) {
    console.error('Error fetching collections:', error);
    throw new Error('Failed to fetch collections');
  }
};

export const createCollection = async (
  data: {
    name: string;
    color: string;
    icon: string;
  },
  path: string
) => {
  try {
    await connectToDatabase();
    const { name, color, icon } = data;
    await Collection.create({
      name,
      color,
      icon,
    });
    revalidatePath(path);
  } catch (e) {
    console.log(e);
  }
};
