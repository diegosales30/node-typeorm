import { Response, Request } from "express";

class CreateUserController {
  handle(req: Request, res: Response) {
    return res.json([
      {
        nome: "João",
      },
      {
        nome: "Maria",
      },
      {
        nome: "José",
      },
    ]);
  }
}

export { CreateUserController };
