import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { PersonEntity } from './person.entity';
import { BaseEntity } from './base/base.entity';

@Entity('phone_number')
export class PhoneNumberEntity extends BaseEntity {
  @Column({ name: 'phone_number', length: 100 })
  phoneNumber: string;

  @Column('int', { default: 1 })
  primary: number;

  @Column({ name: 'type', length: 100 })
  type: string;

  @Column('uuid', { name: 'person_id', nullable: true })
  @ManyToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  user: PersonEntity;
}
