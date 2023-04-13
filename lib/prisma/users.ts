import { Prisma } from "@prisma/client";
import client from ".";

export interface SetUser {
  browserId: string;
  name: string;
  limit: number;
}

// Set new user
export async function setUser(user: SetUser) {
  try {
    const usersFromDb = await client.user.create({
      data: user,
    });
    return { user: usersFromDb };
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError ||
      error instanceof Prisma.PrismaClientUnknownRequestError
    ) {
      return error;
    }
  }
}

//get user by browser id
export async function getUserByVisitorId(id: string) {
  try {
    const user = await client.user.findFirst({
      where: {
        browserId: id,
      },
      include: {
        recents: true,
      },
    });
    if (user) {
      return {
        success: true,
        user: user,
      };
    } else {
      return {
        success: false,
        message: "users not found",
      };
    }
  } catch (error) {
    return error;
  }
}

//update Limit
export async function updateLimit(id: string, limit: number) {
  try {
    const updated = await client.user.update({
      where: {
        browserId: id,
      },
      data: {
        limit: limit,
      },
    });
    return updated;
  } catch (error) {
    return error;
  }
}
