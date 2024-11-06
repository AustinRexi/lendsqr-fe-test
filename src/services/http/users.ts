import { server } from "../db";

const usersTables = "users";

export const getAllUsers = () => {
  const allUsers = server.getTableData(usersTables);
  return allUsers;
};
