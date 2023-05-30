import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PersonEntity } from './person.entity';
import { BaseEntity } from './base/base.entity';

@Entity('owner')
export class OwnerEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'owner_id' })
  ownerId: string;

  @Column({ name: 'status', length: 100, default: 'ACTIVE' })
  status: string;

  @OneToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  Person: PersonEntity;
}
