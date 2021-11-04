import { ToDo, ToDoCreationAttributes, ToDoAttributes } from "../models/ToDo";

export default class ToDosService {
  async addToDo(todoText: ToDoCreationAttributes): Promise<ToDoAttributes> {
    try {
      return await ToDo.create({ text: todoText });
    } catch (err) {
      throw new Error("An Error occurred while attempting to create a ToDo");
    }
  }

  async getAllToDos(): Promise<Array<ToDoAttributes>> {
    try {
      return await ToDo.find({});
    } catch (err) {
      throw new Error("An error occurred while looking for ToDos");
    }
  }

  async getToDoById(todoId: string): Promise<ToDoAttributes> {
    try {
      const todo = await ToDo.findById(todoId);
      if (!todo) {
        throw new Error();
      }
      return todo;
    } catch (err) {
      throw new Error("An erro occurred while looking for a ToDo");
    }
  }

  async updateToDo(
    todoText: ToDoCreationAttributes,
    todoId: string
  ): Promise<ToDoAttributes | null> {
    try {
      const oldTodo = await ToDo.findById(todoId);
      if (!oldTodo) {
        throw new Error();
      }
      const newTodo = await ToDo.findByIdAndUpdate(todoId, todoText, {
        new: true,
      });
      return newTodo;
    } catch (err) {
      throw new Error("An error occurred while attempting to update a ToDo");
    }
  }

  async deleteToDo(todoId: string): Promise<ToDoAttributes | null> {
    try {
      const todo = await ToDo.findById(todoId);
      if (!todo) {
        throw new Error();
      }
      await ToDo.findByIdAndDelete(todoId);
      return todo;
    } catch (err) {
      throw new Error("An error occurred while deleting the ToDo");
    }
  }
}
