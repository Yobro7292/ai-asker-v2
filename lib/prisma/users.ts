import { Prisma } from '@prisma/client'
import client from ".";

export interface SetUser {
  browserId: string;
  name: string;
}
export async function getUsers() {
  try {
    const users = await client.user.findMany();
    if(users.length){
        return users;
    } else{
        return {
            message : "users not found"
        }
    }
  } catch (error) {
    if(error instanceof Prisma.PrismaClientKnownRequestError || error instanceof Prisma.PrismaClientUnknownRequestError){
        return error;
    }
  }
}

export async function setUser(user: SetUser) {
  try {
    const usersFromDb = await client.user.create({
      data: user,
    });
    return { user: usersFromDb };
  } catch (error) {
    if(error instanceof Prisma.PrismaClientKnownRequestError || error instanceof Prisma.PrismaClientUnknownRequestError){
        return error;
    }
  }
}

export async function getUserById(id: string) {
  try {
    const user = await client.user.findUnique({ where: { id } });
    return { user };
  } catch (error) {
    return error;
  }
}
