import { Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { CreateUserDto } from './dtos/createUser.dto';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUser: CreateUserDto): Promise<UserEntity> {
    const saltOrRound = 10;
    const passwordHash = await hash(createUser.password, saltOrRound);

    return this.userRepository.save({
      ...createUser,
      password: passwordHash,
    });
  }

  async getAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}
