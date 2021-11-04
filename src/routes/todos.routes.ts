import { Router, Request, Response } from "express";
import {
  todosPostController,
  todosGetController,
  todosGetByIdController,
  todosUpdateController,
  todosDeleteController,
} from "../controllers"; // This shouldn't be here

export const register = (router: Router) => {
  /**
   * ROOT ENDPOINT TO INDICATE THAT THE SERVER IS RUNNING
   */

  router.get("/", (req: Request, res: Response) => {
    res.status(200).render("welcome.pug");
  });

  /**
   * TODOS CRUD OPERATIONS
   */

  // CREATE A NEW TODO
  router.post("/todos", (req: Request, res: Response) => {
    todosPostController.run(req, res);
  });

  // GET ALL TODOS
  router.get("/todos", (req: Request, res: Response) => {
    todosGetController.run(req, res);
  });

  // GET A SPECIFIC TODO BY ID
  router.get("/todos/:id", (req: Request, res: Response) => {
    todosGetByIdController.run(req, res);
  });

  // UPDATE A TODO BY ID
  router.put("/todos/:id", (req: Request, res: Response) => {
    todosUpdateController.run(req, res);
  });

  // DELETE A TODO BY ID
  router.delete("/todos/:id", (req: Request, res: Response) => {
    todosDeleteController.run(req, res);
  });
};
