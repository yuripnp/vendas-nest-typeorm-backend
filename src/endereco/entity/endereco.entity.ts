import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'endereco' })
export class EnderecoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'city', nullable: false })
  city: string;

  @Column({ name: 'cep', nullable: false })
  cep: string;

  @Column({ name: 'street', nullable: false })
  street: string;

  @Column({ name: 'number', nullable: false })
  number: string;

  @Column({ name: 'is_used', nullable: false })
  is_used: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updared_at: Date;
}
