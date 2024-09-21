'use server';

import { connectToDatabase } from "../mongodb";

export const GetCollectins = async () => {
  await connectToDatabase()
}