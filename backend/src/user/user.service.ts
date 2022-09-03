import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User.entity';
import { faker } from '@faker-js/faker'

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUsers() {
    await this.insertUser(faker.name.firstName())
    const users = await this.findAll()
    const usersAsList = users.map(user => user.firstName).join('<br>')
    const text = `
      <h1>Full Cycle Rocks!</h1>
      <p>- Lista de nomes cadastrada no banco de dados.</p>
      ${usersAsList}
    `
    return text
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  insertUser(firstName: string): Promise<User> {
    return this.usersRepository.save({
      firstName,
    })
  }

}
