import { model, Schema } from "mongoose";

export interface ToDoAttributes {
  text: string;
}

export interface ToDoCreationAttributes extends ToDoAttributes {}

const schema = new Schema<ToDoAttributes>(
  {
    text: { type: String, required: true, trim: true, minlength: 3 },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export const ToDo = model<ToDoAttributes>("ToDo", schema);
