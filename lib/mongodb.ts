import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', false);
  if (!process.env.MONGODB_URL) return console.log('MISSING MONGODB_URL');
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'word-whiz',
    });
    isConnected = true;
    console.log('MongoDB connected');
  } catch (e) {
    console.log('MongoDB connection failed');
  }
};
