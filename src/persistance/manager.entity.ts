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

@Entity('manager')
export class ManagerEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'manager_id' })
  managerId: string;

  @Column({ name: 'status', length: 100 })
  status: string;

  @OneToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  Person: PersonEntity;
}
