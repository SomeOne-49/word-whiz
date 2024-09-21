'use server';

import Collection from '@/database/collections.model';
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
