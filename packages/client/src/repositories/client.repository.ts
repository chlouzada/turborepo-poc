import { db } from "../db";
import {  clientSchema, IClient } from "../schemas/client.schema";

export class ClientRepository {
  private readonly model = db.model("clients", clientSchema);

  async create({ name, email }: { name: string; email: string }): Promise<IClient> {
    return await this.model.create({ name, email });
  }
}
