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

@Entity('address')
export class AddressEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'address_id' })
  addressId: string;

  @Column({ name: 'street', length: 100 })
  street: string;

  @Column({ name: 'city', length: 100 })
  city: string;

  @Column({ name: 'postal_code', length: 100 })
  postalCode: string;

  @OneToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  Person: PersonEntity;
}
