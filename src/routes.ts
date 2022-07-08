import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();
const createUserController = new CreateUserController();

router.get("/", (req: Request, res: Response) => {
  return res.json({ message: "bem vindo" });
});

router.get("/usuarios", createUserController.handle);

export { router };
