import { Schema } from "mongoose";

export interface ICellphone {
  number: string;
  userRef: Schema.Types.ObjectId;
}

export const cellphoneSchema = new Schema<ICellphone>(
  {
    number: { type: String, required: true },
    userRef: { type: Schema.Types.ObjectId, ref: "users", required: true },
  },
  { timestamps: true }
);
