import { Request, Response } from "express";
import Controller from "../Controller";
import { ToDosService } from "src/services";

export class ToDosGetController implements Controller {
  constructor(private service: ToDosService) {}

  async run(req: Request, res: Response): Promise<void> {
    try {
      const todos = await this.service.getAllToDos();
      res.status(200).json(todos);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
}

export class ToDosGetByIdController implements Controller {
  constructor(private service: ToDosService) {}

  async run(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const todo = await this.service.getToDoById(id);
      res.status(200).json(todo);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
}
