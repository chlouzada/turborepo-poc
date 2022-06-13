import { createConnection } from "mongoose";

export const db = createConnection("mongodb://localhost:27017/turborepo-user");
