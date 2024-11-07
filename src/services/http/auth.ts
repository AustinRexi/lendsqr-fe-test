import { User } from "../../types/users.types";
import { server } from "../db";
import { usersTables } from "./users";

export const handleLogin = async (email: string, password: string) => {
  const allUsers: User[] = await server.getTableData(usersTables);
  const user = allUsers.find(
    (user: User) => user.email.toLowerCase() === (email || "").toLowerCase()
  );
  if (!user) throw new Error("Invalid Credentials");
  const passwordMatch = user.password === password;
  if (!passwordMatch) throw new Error("Invalid Credentials");
  return user;
};
