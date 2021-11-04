import { Request, Response } from "express";
import Controller from "../Controller";
import { ToDosService } from "src/services"; // This should't be here

export default class ToDosPostController implements Controller {
  constructor(private service: ToDosService) {}

  async run(req: Request, res: Response): Promise<void> {
    const { text } = req.body;
    try {
      const todo = await this.service.addToDo(text);
      res.status(201).json(todo);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
}
