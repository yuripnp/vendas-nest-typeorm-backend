import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/createUser.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private _users: User[] = [];

  async createUser(createUser: CreateUserDto): Promise<User> {
    const saltOrRound = 10;
    const passwordHash = await hash(createUser.password, saltOrRound);
    const user: User = {
      ...createUser,
      id: this._users.length + 1,
      password: passwordHash,
    };
    this._users.push(user);
    console.log('password', passwordHash);
    return user;
  }

  async getAllUser(): Promise<User[]> {
    return this._users;
  }
}
