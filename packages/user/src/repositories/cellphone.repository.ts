import { db } from "../db";
import { cellphoneSchema } from "../schemas/cellphone.schema";

export class CellphoneRepository {
  private readonly model = db.model("cellphones", cellphoneSchema);

  async create({ number, userId }: { number: string; userId: string }) {
    return await this.model.create({ number, userRef: userId });
  }
}
