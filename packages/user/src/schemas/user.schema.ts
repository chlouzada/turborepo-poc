import { Schema } from "mongoose";

export interface IUser {
  name: string;
  cellphoneRefs: Schema.Types.ObjectId[];
}

export const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    cellphoneRefs: [{ type: Schema.Types.ObjectId, ref: "cellphones" }],
  },
  { timestamps: true }
);
