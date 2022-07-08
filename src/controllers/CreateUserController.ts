import { Response, Request } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  handle(req: Request, res: Response) {
    const createUserService = new CreateUserService();

    const name = req.body.name;
    const email = req.body.email;

    if (name.length === 0 || email.length === 0) {
      return res.status(400).json({ error: "campos vazios" });
    }

    const user = createUserService.execute({ name, email });

    return res.status(201).json({ user });
  }
}

export { CreateUserController };
