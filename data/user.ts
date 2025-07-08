import { db } from "@/lib/db";
// The 'sendEmail' import is no longer needed as the cron job is disabled.

interface UserData {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
}

export const getUserByEmail = async (email: string | undefined) => {
  if (!email) {
    return null;
  }
  try {
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    return existingUser;
  } catch (e) {
    console.log(e);
  }
};

export const getUserById = async (id: string | undefined) => {
  if (!id) {
    return null;
  }
  try {
    const existingUser = await db.user.findUnique({
      where: {
        id,
      },
    });
    return existingUser;
  } catch (e) {
    console.log(e);
  }
};

export const getUsersByName = async (query: string | undefined) => {
  if (!query) {
    return null;
  }
  try {
    const users = await db.user.findMany({
      where: {
        email: {
          startsWith: query,
          mode: "insensitive",
        },
      },
    });
    const userData: UserData[] = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      };
    });
    return userData;
  } catch (e) {
    console.log(e);
    return null;
  }
};

// MODIFICATION 1: This function now always returns true.
// This makes the system treat every user as if they are subscribed,
// preventing any free-tier logic from running.
const isUserSubscribed = (user: any) => {
  return true;
};

// MODIFICATION 2: This function's core logic is removed.
// It will no longer reset the emailProcessed counter for free users.
export const performCronOperations = async () => {
  try {
    // The original logic for resetting free tier quotas has been removed.
    // This function now does nothing, ensuring limits are never reset.
    console.log("Cron operations skipped: All limits are disabled.");
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};