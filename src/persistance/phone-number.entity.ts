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

@Entity('phone_number')
export class PhoneNumberEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'phone_number_id' })
  phoneNumberId: string;

  @Column({ name: 'phone_number', length: 100, nullable: true })
  phoneNumber: string;

  @Column('int', { default: 1 })
  primary: number;

  @Column({ name: 'type', length: 100, nullable: true })
  type: string;

  @OneToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  Person: PersonEntity;
}
