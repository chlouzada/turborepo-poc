import { IUser, userSchema } from "../schemas/user.schema";
import { db } from "../db";

export class UserRepository {
  private readonly model = db.model("users", userSchema);

  async create({ name }: { name: string }): Promise<IUser> {
    return await this.model.create({ name });
  }
}
