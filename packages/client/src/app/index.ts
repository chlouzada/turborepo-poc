import { gcp } from "utils";
import { router } from "../routes";

export const client = gcp({
  functions: {
    router,
  },
});
