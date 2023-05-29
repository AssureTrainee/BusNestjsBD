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

@Entity('driver')
export class DriverEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'driver_id' })
  driverId: string;

  @Column({ name: 'status', length: 100 })
  status: string;

  @Column({ name: 'code', length: 100 })
  code: string;

  @Column('uuid', { name: 'person_id', nullable: true })
  @ManyToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  user: PersonEntity;
}
