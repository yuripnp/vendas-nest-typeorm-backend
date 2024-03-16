import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EnderecoEntity } from './entity/endereco.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectRepository(EnderecoEntity)
    private readonly enderecoRepository: Repository<EnderecoEntity>,
  ) {}
}
