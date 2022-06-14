import { Request, Response } from "express";
import { UserRepository } from "../../repositories/user.repository";
import { injectable } from "tsyringe";

@injectable()
export class FindUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(req: Request, res: Response) {
    const users = await this.userRepository.findAll();
    res.json(users);
  }
}
