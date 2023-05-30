import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { PassengerEntity } from './passenger.entity';

@Entity('person')
export class PersonEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'person_id' })
  personId: string;

  @Column({ name: 'first_name', length: 100 })
  firstName: string;

  @Column({ name: 'last_name', length: 100 })
  lastName: string;

  @Column({ type: 'timestamp', name: 'birth_date' })
  birthDate: Date;

  @Column({ name: 'dni', length: 100 })
  dni: string;

  @Column({ name: 'code' })
  code: number;
}
