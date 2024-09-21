'use server';

import User from '@/database/user.modal';
import { connectToDatabase } from '../mongodb';

export const createUser = async (user: any) => {
  try {
    await connectToDatabase(); 
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user'); 
  }
};
