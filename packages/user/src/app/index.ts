import { gcp } from "utils";
import { router } from "../routes";

export const user = gcp({
  functions: {
    router,
  },
});
