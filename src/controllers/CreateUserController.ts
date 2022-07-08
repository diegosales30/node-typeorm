import { Response, Request } from "express";

class CreateUserController {
  handle(req: Request, res: Response) {
    const name = req.body.name;
    return res.json({ message: `user ${name} criado` });
  }
}

export { CreateUserController };
