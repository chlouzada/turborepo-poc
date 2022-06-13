import { connect } from "mongoose";

export * from "./app";

connect("mongodb://localhost:27017/turborepo-client")