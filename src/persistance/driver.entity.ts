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

@Entity('driver')
export class DriverEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'driver_id' })
  driverId: string;

  @Column({ name: 'status', length: 100, default: 'ACTIVE' })
  status: string;

  @Column({ name: 'code', length: 100, default: 'Active' })
  code: string;

  @OneToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  Person: PersonEntity;
}
