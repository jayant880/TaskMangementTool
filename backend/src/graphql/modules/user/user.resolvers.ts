import { UserService } from "../../../services/userService";
import { LoginArgs, RegisterArgs } from "./user.types";

export const userResolvers = {
  Query: {
    login: (_parent: any, args: LoginArgs) => {
      return UserService.findByCredentials(args.username, args.password);
    },
    users: () => {
      return UserService.getAllUser();
    },
  },
  Mutation: {
    register: (_parent: any, args: RegisterArgs) => {
      const existingUser = UserService.findByUsername(args.username);
      if (existingUser) throw new Error("Username Already exists");
      const existingEmail = UserService.findByEmail(args.email);
      if (existingEmail) throw new Error("Email already exist");

      return UserService.createUser(args);
    },
  },
};
