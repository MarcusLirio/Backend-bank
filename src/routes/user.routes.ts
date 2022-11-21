import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import loginUserController from "../controllers/users/loginUser.controller";
import validationMiddleware from "../middlewares/validation.middleware";
import userSchema from "../schemas/users.schemas";

const userRoutes = Router();

userRoutes.post("/singnup", validationMiddleware(userSchema), createUserController);
userRoutes.post("/singnin", loginUserController);

export default userRoutes;
