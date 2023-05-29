import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PersonEntity } from './person.entity';
import { BaseEntity } from './base/base.entity';

@Entity('owner')
export class OwnerEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'owner_id' })
  ownerId: string;

  @Column({ name: 'status', length: 100 })
  status: string;

  @Column('uuid', { name: 'person_id', nullable: true })
  @ManyToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  user: PersonEntity;
}
