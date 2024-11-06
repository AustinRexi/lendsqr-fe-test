import { server } from "../db";

export interface USER {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const usersTables = "users";

export const Login = async (email: string, password: string) => {
  const allUsers: USER[] = await server.getTableData(usersTables);
  const user = allUsers.find((user: USER) => user.email === email);
  if (!user) throw new Error("Invalid Credentials");
  const passwordMatch = user.password === password;
  if (!passwordMatch) throw new Error("Invalid Credentials");
  return user;
};
