import { Request, Response } from "express";
import Controller from "../Controller";
import { ToDosService } from "src/services";

export default class ToDosDeleteController implements Controller {
  constructor(private service: ToDosService) {}

  async run(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const deletedToDo = await this.service.deleteToDo(id);
      res.status(200).json({
        todo: deletedToDo,
        message: "Successfully deleted from database",
      });
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
}
