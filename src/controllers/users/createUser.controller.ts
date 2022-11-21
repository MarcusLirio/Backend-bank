import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/user.interfaces";
import createUserService from "../../services/users/createUser.service";
import { instanceToPlain } from "class-transformer";

const createUserController = async (req: Request, res: Response) => {
  const { username, password }: IUserRequest = req.body;
  const user = await createUserService({
    username,
    password
  });

  return res.status(201).json(instanceToPlain(user));
};

export default createUserController;
