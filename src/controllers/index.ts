import { todosService } from "../services";

// TODOS CONTROLLER IMPORTS
import { ToDosGetController, ToDosGetByIdController } from "./ToDoControllers/ToDosGetController";
import ToDosPostController from "./ToDoControllers/ToDosPostController";
import ToDosDeleteController from "./ToDoControllers/ToDosDeleteController";
import ToDosUpdateController from "./ToDoControllers/ToDosUpdateController";

// TODOS CONTROLLERS EXPORTS
export const todosPostController = new ToDosPostController(todosService);
export const todosGetController = new ToDosGetController(todosService);
export const todosGetByIdController = new ToDosGetByIdController(todosService);
export const todosUpdateController = new ToDosUpdateController(todosService);
export const todosDeleteController = new ToDosDeleteController(todosService);
