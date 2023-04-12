// @ts-nocheck

import { Prisma } from "@prisma/client";
import client from ".";

interface RecentsProps {
  title: string;
  content: string;
  userId: string;
}
// Set new recent
export async function setRecents(recents: RecentsProps) {
  try {
    const recentsFromDB = await client.recent.create({ data: recents });
    return recentsFromDB;
  } catch (error) {
    console.log(error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError ||
      error instanceof Prisma.PrismaClientUnknownRequestError
    ) {
      return error;
    }
  }
}

export async function getRecents(id: string) {
  try {
    const recentsFromDB = await client.recent.findMany({
      where: {
        userId: id,
      },
    });
    return recentsFromDB;
  } catch (error) {
    console.log(error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError ||
      error instanceof Prisma.PrismaClientUnknownRequestError
    ) {
      return error;
    }
  }
}
