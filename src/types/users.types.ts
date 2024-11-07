export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  dateJoined: string;
  status: "Inactive" | "Pending" | "Active" | "Blacklisted";
}
