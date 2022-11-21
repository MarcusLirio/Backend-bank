import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/user.interfaces";
import { hash } from "bcryptjs";
import { AppError } from "../../errors/appError";
import { Account } from "../../entities/account.entity";

const createUserService = async ({
  username,
  password
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();


  const usernameAlreadyExists = users.find(
    (user) => user.username === username
  );

  if (usernameAlreadyExists) {
    throw new AppError(400, "Username already exists");
  }

  const hashedPass = await hash(password, 10);

  const accountRepository = AppDataSource.getRepository(Account);
  const account = accountRepository.create({ balance: 100 });
  await accountRepository.save(account);

  const user = userRepository.create({
    username,
    password: hashedPass,
    account,
  });

  await userRepository.save(user);

  return user;
};

export default createUserService;
