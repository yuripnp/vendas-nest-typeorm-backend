import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'nome', length: 255, nullable: false })
  nome: string;

  @Column({ name: 'email', length: 255, nullable: false })
  email: string;

  @Column({ name: 'cpf', length: 255, nullable: false })
  cpf: string;

  @Column({ name: 'telefone', length: 20, nullable: false })
  telefone: string;

  @Column({ name: 'password', length: 255, nullable: false })
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}
