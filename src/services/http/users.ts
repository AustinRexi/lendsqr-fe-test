import { User } from "../../types/users.types";
import { server } from "../db";

export const usersTables = "users";

export interface ALL_USERS {
  items: User[];
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  currentPage: number;
}

export const getAllUsers = async (
  page: number = 1,
  itemsPerPage: number = 10
): Promise<ALL_USERS> => {
  const allUsers: User[] = await server.getTableData(usersTables);

  const totalPages = Math.ceil(allUsers.length / itemsPerPage);
  const end = page * itemsPerPage;
  const start = end - itemsPerPage;
  const items = allUsers.slice(start, end);
  const hasNext = page < totalPages;
  const hasPrev = page !== 1;
  const res = {
    items,
    totalPages,
    hasNext,
    hasPrev,
    currentPage: page,
  };

  return res;
};

export const getUserById = async (id: string): Promise<User | null> => {
  const allUsers: User[] = await server.getTableData(usersTables);
  return allUsers.find((user: User) => user.id === id) || null;
};
