import { Request, Response } from "express";
import Controller from "../Controller";
import { ToDosService } from "src/services";

export default class ToDosUpdateController implements Controller {
  constructor(private service: ToDosService) {}

  async run(req: Request, res: Response): Promise<void> {
    const {
      params: { id },
      body: { text },
    } = req;
    try {
      const updatedToDo = await this.service.updateToDo({ text }, id);
      res.status(200).json(updatedToDo);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
}
