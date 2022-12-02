import { Document, model, Model, Schema } from "mongoose";


export interface ITodo extends Document {
    id: string;
    title: string;
    description: string;
}

const TodoSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required:true }
});

export const Todo = model('Todo', TodoSchema);
