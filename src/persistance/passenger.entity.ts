import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PersonEntity } from './person.entity';
import { BaseEntity } from './base/base.entity';

@Entity('passenger')
export class PassengerEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'passenger_id' })
  passengerId: string;

  @Column({ name: 'status', length: 100, default: 'ACTIVE' })
  status: string;

  @OneToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  Person: PersonEntity;
}
