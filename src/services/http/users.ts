import { User } from "../../types/users.types";
import { server } from "../db";

export const usersTables = "users";

export const getAllUsers = async (): Promise<User[]> => {
  const allUsers: User[] = await server.getTableData(usersTables);
  return allUsers;
};

export const getUserById = async (id: string): Promise<User | null> => {
  const allUsers: User[] = await server.getTableData(usersTables);
  return allUsers.find((user: User) => user.id === id) || null;
};
