import { ClientModel, IClient } from "../schemas/client.schema";

export class ClientRepository {
  private readonly model = ClientModel;

  async create({ name, email }: { name: string; email: string }): Promise<IClient> {
    return await this.model.create({ name, email });
  }
}
