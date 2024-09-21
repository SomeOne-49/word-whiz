'use server';

import User from '@/database/client.model';
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

export const updateUser = async (userId: string, updatedDate: {}) => {
  try {
    await connectToDatabase();
    await User.findOneAndUpdate({ userId }, updatedDate, {
      new: true,
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = async (clerkId: string) => {
  try {
    connectToDatabase();

    const user = await User.findOneAndDelete({ clerkId });

    if (!user) {
      throw new Error('User not found');
    }

    // Delete user from database
    // and questions, answers, comments, etc.

    // get user question ids
    // const userQuestionIds = await Question.find({ author: user._id}).distinct('_id');

    // delete user questions

    // TODO: delete user answers, comments, etc.
  } catch (error) {
    console.log(error);
    throw error;
  }
};
