import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base/base.entity';

@Entity('account_type')
export class AccountTypeEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'account_type_id' })
  accounttypeId: string;

  @Column('text', {
    unique: true,
  })
  type: string;

  @Column({ name: 'fee', type: 'numeric' })
  fee: number;
}
