import { Schema } from "mongoose";

export interface IClient {
  name: string;
  email: string;
}

export const clientSchema = new Schema<IClient>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);