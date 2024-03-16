import { Controller, Get } from '@nestjs/common';
import { EnderecoEntity } from './entity/endereco.entity';
import { EnderecoService } from './endereco.service';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  @Get()
  async allGetEndereco(): Promise<EnderecoEntity[]> {
    return this.enderecoService.getAllEndereco();
  }
}
