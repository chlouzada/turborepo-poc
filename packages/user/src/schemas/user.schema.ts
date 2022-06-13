import { model, Schema } from "mongoose";

export interface IUser {
  name: string;
}

export const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);