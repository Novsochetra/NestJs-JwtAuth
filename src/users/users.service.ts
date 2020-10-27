import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: 1,
        name: 'john',
        password: 'changeme',
      },
      {
        id: 2,
        name: 'chris',
        password: 'secret',
      },
      {
        id: 3,
        name: 'maria',
        password: 'guess',
      },
    ];
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(u => u.id === id) ?? { error: 'user id not found' };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
