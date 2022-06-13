import { IUser, userSchema } from "../schemas/user.schema";
import { db } from "../db";

export class UserRepository {
  private readonly model = db.model("users", userSchema);

  async findAll() {
    return await this.model.find().populate("cellphoneRefs");
  }

  async create({ name }: { name: string }) {
    return await this.model.create({ name });
  }

  async update({ id, data }: { id: string; data: { name: string } }) {
    return await this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async linkCellphone({
    userId,
    cellphoneId,
  }: {
    userId: string;
    cellphoneId: string;
  }) {
    return await this.model.findByIdAndUpdate(
      userId,
      {
        $push: { cellphoneRefs: cellphoneId },
      },
      { new: true }
    );
  }
}
