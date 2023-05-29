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

  @Column('uuid', { name: 'person_id', nullable: true })
  @ManyToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  user: PersonEntity;
}
