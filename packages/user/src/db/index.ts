import { Connection, createConnection } from "mongoose";
import { cellphoneSchema } from "../schemas/cellphone.schema";
import { userSchema } from "../schemas/user.schema";

let conn: Connection | undefined;

export const getConnection = () => {
  if (conn) return conn;

  // Connect to MongoDB
  conn = createConnection("mongodb://localhost:27017/turborepo-user");

  // Register schemas
  conn.model("users", userSchema);
  conn.model("cellphones", cellphoneSchema);

  return conn;
};

export const db = getConnection();
