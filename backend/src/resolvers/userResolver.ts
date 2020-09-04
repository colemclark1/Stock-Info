import { User } from "../entity/User";
import { getRepository } from 'typeorm';

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    User: async (_: any, args: any) => {
      const { id } = args;
      console.log("here");
      return await getRepository(User).findOne({ where: { id: id } });
    }
  },
  Mutation: {
    addUser: async (_: any, args: any) => {
      const userRepo = getRepository(User)
      const { firstName, lastName, age, email } = args;
        const user = userRepo.create({
          firstName,
          lastName,
          age,
          email
        });

        const savedUser = await userRepo.save(user)

        return savedUser;
    }
  }
};