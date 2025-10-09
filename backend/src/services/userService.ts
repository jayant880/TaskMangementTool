import { RegisterArgs } from "../graphql/modules/user/user.types";
import { User } from "../models/User";

const Users: User[] = [
  {
    id: "1",
    username: "User1",
    email: "eamil1@email.com",
    password: "secret",
  },
];

export class UserService {
  static getAllUser(): User[] {
    return Users;
  }

  static findByCredentials(username: string, password: string): User | null {
    const user = Users.find(
      (user) => user.username === username && user.password === password
    );
    return user || null;
  }

  static createUser(userData: RegisterArgs): User {
    const newUser: User = {
      id: crypto.randomUUID(),
      username: userData.username,
      email: userData.email,
      password: userData.password,
    };

    Users.push(newUser);
    return newUser;
  }

  static findByUsername(username: string): User | undefined {
    return Users.find((u) => u.username === username);
  }

  static findByEmail(email: string): User | undefined {
    return Users.find((u) => u.email === email);
  }
}
