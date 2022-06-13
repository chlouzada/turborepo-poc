import { UserModel, IUser } from "../schemas/user.schema";

export class UserRepository {
  private readonly model = UserModel;

  async create({ name }: { name: string }): Promise<IUser> {
    return await this.model.create({ name });
  }
}
