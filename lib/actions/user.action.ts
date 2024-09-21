'use server';

import User from '@/database/user.modal';
import { connectToDatabase } from '../mongodb';

export const CreateUser = async (user: any) => {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (e) {
    console.log(e);
  }
};
